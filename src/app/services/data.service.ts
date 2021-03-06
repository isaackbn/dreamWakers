import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { EnvironmentService } from './environment.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { BucketService } from './bucket.service'
import { Observable, observable, ReplaySubject } from 'rxjs';








@Injectable({
  providedIn: 'root'
})
export class DataService {

  profile: EventEmitter<object> = new EventEmitter(); //subscriptions: topbar, home, auth-redirect
  users : EventEmitter<object> = new EventEmitter(); //subscriptions: home-suggest
  user : EventEmitter<object> = new EventEmitter(); //subscriptions: home-suggest
  speakers : EventEmitter<object> = new EventEmitter(); //subscriptions: home-search
  profileTypeUpdate : EventEmitter<object> = new EventEmitter(); //subscriptions: home-search

  formData: EventEmitter<object> = new EventEmitter(); //subscriptions: top-bar | emmiter: forms-setting

  profilesData = new ReplaySubject(1) //subscriptions: home-main | emmiter: profiles



  constructor(  private http:HttpClient,
                private envir:EnvironmentService,
                private cookies:CookieService,
                private router:Router,
                private auth:AuthService,
                private bucket:BucketService) {
                }





  /* PROFILE */

  //refresh profile data if session active, called from topbar
  getProfile(callback){
    
    var sessionId = localStorage.getItem("sid")
    if ( sessionId != null) this.refreshProfileData(sessionId, callback)
  }
  //tryPersist helper function
  private refreshProfileData(sessionId, callback){
    this.http.get(this.envir.getServer("noEncode")+'/data/profile/'+sessionId).subscribe(res => {
      var data:any = res
      if (callback != null) callback(data)
      this.emitProfileData(data, null)
    }, err => {
      console.log("could not fetch profile data: "+err.error); 
      this.signOut()
    } )
  }
  //called here, authService, auth-redirected
  emitProfileData(data, route){    
    if(typeof data.error != "undefined"){ //received error trying to get profile data
      console.log("profile data msg: "+data.error)
      if(data.error == "Auth failed") this.signOut()
      if (route == "route/home" ) this.router.navigate(['/home'])
      return
    }
    
    localStorage.setItem("sid", data.sessionId)
    //localStorage.setItem("userIn", "true")
    if (data.hasPicture == "false") data.pictureUrl = this.envir.getServer("noEncode")+data.pictureUrl
    this.profile.emit(data);
    if (route == "route/home" ) this.router.navigate(['/home'])

  }
  //called from home
  updateProfileType(type){     
      this.http.get(this.envir.getServer("noEncode")+'/auth/updateProfileType/'+type+"/"+localStorage.getItem("sid")).subscribe( () => this.profileTypeUpdate.emit(type))
  }






  /* USERS */

  //get users from db if session active, called in home
  getUsers(){
    this.bucket.loadIcon.next(true)
    var sessionId = localStorage.getItem("sid")
    if ( sessionId != null) this.reqUsers(sessionId)
  }
  //get users helper function
  reqUsers(sessionId){
    this.http.get(this.envir.getServer("noEncode")+'/data/users/'+sessionId).subscribe(res => {
      var data:any = res
      this.bucket.loadIcon.next(false)
      this.emitUsersData(data)
    }, err => {
      console.log("could not fetch users data: "+err); 
      this.signOut()
    })
  }
  //called here
  emitUsersData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get users data
      console.log("users data msg: "+data.error)
      if(data.error == "Auth failed") this.signOut()
      return
    }
    
    data.forEach( user => {
      console.log();
      
      if (user.hasPicture == "false") user.pictureUrl = this.envir.getServer("noEncode")+user.pictureUrl
    })
     
    this.users.emit(data);
  }
  resetPicUrl(userId){
    console.log("etetehsvbreahivbairj");
    this.http.get(this.envir.getServer("noEncode")+'/auth/resetPicUrl/'+userId).subscribe(res => {
      this.getUsers()
    })
  }







/* USER */

  //get user from db if session active, called in details
  getUser(id, callback){
    var sessionId = localStorage.getItem("sid")
    if ( sessionId != null) this.reqUser(sessionId, id, callback)
  }
  //get user helper function
  reqUser(sessionId, id, callback){
    this.http.get(this.envir.getServer("noEncode")+'/data/user/'+sessionId+'/'+id).subscribe(res => {
      var data:any = res
      this.emitUserData(data)
      callback
    }, err => {
      console.log("could not fetch user data: "+err); 
      this.signOut()
    })
  }
  //called here
  emitUserData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get user data
      console.log("user data msg: "+data.error)
      if(data.error == "Auth failed") this.signOut()   
      return
    }
    if (data.hasPicture == "false") data.pictureUrl = this.envir.getServer("noEncode")+data.pictureUrl
    this.user.emit(data);
  }






  /* SPEAKERS */

  //get speakers from db if session active, called in details
  getSpeakers(word, callback){
    var sessionId = localStorage.getItem("sid")
    if ( sessionId != null && word != null) this.reqSpeakers(sessionId, word, callback)
  }
  //get speakers helper function
  reqSpeakers(sessionId, word, callback){ 
    this.http.get(this.envir.getServer("noEncode")+'/data/speakers/'+sessionId+'/'+word).subscribe(res => {
      var data:any = res
      this.emitSpeakersData(data)
      callback
    }, err => {
      console.log("could not fetch speakers data: "+err); 
      this.signOut()
    })
  }
  //called here
  emitSpeakersData(data){    
    if(typeof data.error != "undefined"){ //received error trying to get speakers data
      console.log("speaker data msg: "+data.error)
      this.speakers.emit(data);
      if(data.error == "Auth failed") this.signOut()
      return
    }
    data.forEach( user => {
      if (user.hasPicture == "false") user.pictureUrl = this.envir.getServer("noEncode")+user.pictureUrl
    })
    this.speakers.emit(data);
  }




  emitFormData(data){
    this.formData.emit(data)
  }




signOut(){
  this.auth.signOut()
}






}
