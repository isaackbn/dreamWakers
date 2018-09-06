import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'
import { DataService} from './data.service'
import { Observable} from 'rxjs'
import { EnvironmentService } from './environment.service'
import { LinkedinLoginService} from './linkedin-login.service'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private session
  private sessionId = 0

  constructor(private http:HttpClient, 
              private data:DataService, 
              private envir:EnvironmentService ,
              private linkedinLogin:LinkedinLoginService
            ) {}


  isUserIn(){
    
    if (localStorage.getItem("userIn") == "true") return true;
    else{
      if (localStorage.getItem("oneCheck") == "true"){
          return false
      }
      else this.verifyIfUserIn()
    }
  }

  verifyIfUserIn(){
    this.http.get<any>(this.linkedinLogin.web_server+"/auth/session/isactive/"+localStorage.getItem("sessionId")).subscribe(res => {
      if (res.session == "false") localStorage.setItem("oneCheck", "true")
      else localStorage.setItem("userIn", "true")
    }, err => {
      console.log("Could not verify session: "+err);
      localStorage.setItem("oneCheck", "true")
      return false
    })
  }

  signOut(){
    localStorage.setItem("userIn", "false")
    localStorage.setItem("oneCheck", "false")
    
    this.http.get(this.linkedinLogin.web_server+"/auth/session/destroy/"+localStorage.getItem("sessionId")).subscribe(res => {
      console.log(res);
      this.data.clearStorage()
    }, err => {
      console.log("error: could not sign out: "+err);
    })

  }




}
