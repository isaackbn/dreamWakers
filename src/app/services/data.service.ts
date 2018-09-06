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

  getUsers(){
    return this.http.get(this.envir.getServer("noEncode")+'/users')
  }

  getUser(userId){
    return this.http.get(this.envir.getServer("noEncode")+'/users/item/'+userId)
  }

  postUser(){
    return this.http.get(this.envir.getServer("noEncode")+'/posts')
  }

  saveUserData(data){
    this.profileData = data 
    this.newUserData.emit(data);
    localStorage.setItem("sessionId", data.sessionId)
    localStorage.setItem("firstName", data.firstName)

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

  //called at login and logout
  clearStorage(){
    localStorage.removeItem("profileType")//clean for potential =>false
    localStorage.removeItem("firstName")
    localStorage.removeItem("sessionId")
  }




  getUserDataEmitter() {
    return this.newUserData;
  }



  private refreshUserData(sessionId){
    return this.http.get(this.envir.getServer("noEncode")+'/auth/persists/profile/'+sessionId)
  }
  tryPersist(){
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.saveUserData(this.refreshUserData(sessionId) )
  }


}
