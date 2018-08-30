import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { EnvironmentService } from './environment.service'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'








@Injectable({
  providedIn: 'root'
})
export class DataService {

  profileData = {session:null}

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
    localStorage.setItem("sessionId", data.sessionId)
    localStorage.setItem("oneCheck", "false")
    console.log(this.profileData);
  }


}
