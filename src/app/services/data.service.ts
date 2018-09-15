import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { EnvironmentService } from './environment.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'








@Injectable({
  providedIn: 'root'
})
export class DataService {

  profile: EventEmitter<object> = new EventEmitter(); //subscriptions: topbar, home, auth-redirect
  users : EventEmitter<object> = new EventEmitter(); //subscriptions: home-suggest
  user : EventEmitter<object> = new EventEmitter(); //subscriptions: home-suggest



  constructor(  private http:HttpClient,
                private envir:EnvironmentService,
                private cookies:CookieService,
                private router:Router) {}





  /* PROFILE */

  //refresh profile data if session active, called from topbar
  tryPersist(callback){
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.refreshProfileData(sessionId, callback)
  }
  //tryPersist helper function
  private refreshProfileData(sessionId, callback){    
    this.http.get(this.envir.getServer("noEncode")+'/data/profile/'+sessionId).subscribe(res => {
      var data:any = res
      this.emitProfileData(data)
      callback
    })
  }
  //called here, authService, auth-redirected
  emitProfileData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get profile data
      console.log("profile data msg: "+data.error)
      this.profile.emit(data);
      if(data.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
      return
    }
    this.profile.emit(data);
    localStorage.setItem("sessionId", data.sessionId)
    localStorage.setItem("oneCheck", "false")
    console.log(data);
  }
  //called from home
  updateProfileType(type){ 
      return this.http.get(this.envir.getServer("noEncode")+'/auth/updateProfileType/'+type+"/"+localStorage.getItem("sessionId"))
  }







  /* USERS */

  //get users from db if session active, called in home
  getUsers(callback){
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.reqUsers(sessionId, callback)
  }
  //get users helper function
  reqUsers(sessionId, callback){
    // this.http.get(this.envir.getServer("noEncode")+'/users').subscribe
    this.http.get(this.envir.getServer("noEncode")+'/data/users/'+sessionId).subscribe(res => {
      var data:any = res
      this.emitUsersData(data)
      callback
    })
  }
  //called here
  emitUsersData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get profile data
      console.log("users data msg: "+data.error)
      this.users.emit(data);
      if(data.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
      return
    }
    console.log(data[0]);
    this.users.emit(data);
  }







/* USER */
  //get user from db if session active, called in details
  getUser(id, callback){
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.reqUser(sessionId, id, callback)
  }
  //get user helper function
  reqUser(sessionId, id, callback){
    // this.http.get(this.envir.getServer("noEncode")+'/users').subscribe
    this.http.get(this.envir.getServer("noEncode")+'/data/user/'+sessionId+'/'+id).subscribe(res => {
      var data:any = res
      this.emitUserData(data)
      callback
    })
  }
  //called here
  emitUserData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get profile data
      console.log("user data msg: "+data.error)
      this.user.emit(data);
      if(data.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
      return
    }
    console.log(data);
    this.user.emit(data);
  }











  postUser(){
    return this.http.get(this.envir.getServer("noEncode")+'/posts')
  }






  /* SETTINGS */

  //called at login and logout, from authService
  clearStorage(){ localStorage.removeItem("sessionId") }
}
