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
  speakers : EventEmitter<object> = new EventEmitter(); //subscriptions: home-search




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
      this.profile.emit({order:"sign out"}) //topbar subscribes to this
      return
    }
    this.profile.emit(data);
    localStorage.setItem("sessionId", data.sessionId)
    localStorage.setItem("oneCheck", "false")
  }
  //called from home
  updateProfileType(type){ 
      return this.http.get(this.envir.getServer("noEncode")+'/auth/updateProfileType/'+type+"/"+localStorage.getItem("sessionId"))
  }







  /* USERS */

  //get users from db if session active, called in home
  getUsers(callback_loadToggle){
    callback_loadToggle(true)
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.reqUsers(sessionId, callback_loadToggle)
  }
  //get users helper function
  reqUsers(sessionId, callback_loadToggle){
    this.http.get(this.envir.getServer("noEncode")+'/data/users/'+sessionId).subscribe(res => {
      var data:any = res
      callback_loadToggle(false)
      this.emitUsersData(data)
    })
  }
  //called here
  emitUsersData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get users data
      console.log("users data msg: "+data.error)
      if(data.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
      this.users.emit(data);
      return
    }
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
    this.http.get(this.envir.getServer("noEncode")+'/data/user/'+sessionId+'/'+id).subscribe(res => {
      var data:any = res
      this.emitUserData(data)
      callback
    })
  }
  //called here
  emitUserData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get user data
      console.log("user data msg: "+data.error)
      if(data.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
      this.user.emit(data);
      return
    }
    console.log(data);
    this.user.emit(data);
  }






  /* SPEAKERS */

  //get speakers from db if session active, called in details
  getSpeakers(word, callback){
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.reqSpeakers(sessionId, word, callback)
  }
  //get speakers helper function
  reqSpeakers(sessionId, word, callback){    
    this.http.get(this.envir.getServer("noEncode")+'/data/speakers/'+sessionId+'/'+word).subscribe(res => {
      var data:any = res
      this.emitSpeakersData(data)
      callback
    })
  }
  //called here
  emitSpeakersData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get speakers data
      console.log("speaker data msg: "+data.error)
      this.speakers.emit(data);
      if(data.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
      return
    }
    this.speakers.emit(data);
  }











  /* SETTINGS */

  //called at login and logout, from authService
  clearStorage(){ localStorage.removeItem("sessionId") }
}
