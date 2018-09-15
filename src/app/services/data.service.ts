import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { EnvironmentService } from './environment.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'








@Injectable({
  providedIn: 'root'
})
export class DataService {

  profileData;
  newUserData: EventEmitter<object> = new EventEmitter();


  constructor(  private http:HttpClient,
                private envir:EnvironmentService,
                private cookies:CookieService,
                private router:Router) {}


  saveUserData(data){    
    if(typeof data.error != "undefined"){
      console.log("data refresh msg: "+data.error)
      this.profileData = data 
      this.newUserData.emit(data);
      if(data.error == "Auth failed") this.newUserData.emit({order:"sign out"}) //topbar is listening
      return
    }
    this.profileData = data 
    this.newUserData.emit(data);
    localStorage.setItem("sessionId", data.sessionId)
    localStorage.setItem("oneCheck", "false")
    console.log(this.profileData);
  }

  //called from home
  updateProfileType(type){
    localStorage.setItem("profileType", "set")
    return this.http.get(this.envir.getServer("noEncode")+'/auth/updateProfileType/'+type+"/"+localStorage.getItem("sessionId"))
  }

  //called from home to verify if type modal should be opened
  setProfileHasType(){    
    if (this.profileData.type != null) localStorage.setItem("profileType", "set")
  }






  getUserDataEmitter() {
    return this.newUserData;
  }



  //refresh profile data if session active, called from home,
  tryPersist(callback){
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.refreshProfileData(sessionId, callback)
  }
  //tryPersist helper function
  private refreshProfileData(sessionId, callback){    
    this.http.get(this.envir.getServer("noEncode")+'/data/persists/'+sessionId).subscribe(res => {
      var data:any = res
      this.saveUserData(data)
      callback
    })
  }






  //API get functions
  getUsers(){
    return this.http.get(this.envir.getServer("noEncode")+'/users')
  }

  getUser(userId){
    return this.http.get(this.envir.getServer("noEncode")+'/users/item/'+userId)
  }

  postUser(){
    return this.http.get(this.envir.getServer("noEncode")+'/posts')
  }

  //called at login and logout
  clearStorage(){
    localStorage.removeItem("profileType")//clean for potential =>false
    localStorage.removeItem("firstName")
    localStorage.removeItem("sessionId")
  }
}
