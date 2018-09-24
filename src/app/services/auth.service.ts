import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable} from 'rxjs'
import { EnvironmentService } from './environment.service'
import { LinkedinLoginService} from './linkedin-login.service'
import { Router, NavigationEnd} from '@angular/router'




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  order: EventEmitter<object> = new EventEmitter(); //subscriptions: topbar

  private session
  private sessionId = 0

  constructor(private http:HttpClient, 
              private envir:EnvironmentService ,
              private linkedinLogin:LinkedinLoginService,
              private router:Router
            ) {}


  isUserIn(){
    if(localStorage.getItem("sessionId") == "" || localStorage.getItem("sessionId") == null) {
      this.signOut()
      return false
    }
    else if (localStorage.getItem("userIn") == "true") return true;
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

    if(localStorage.getItem("sessionId") == "" || localStorage.getItem("sessionId") == null){
      localStorage.removeItem("sessionId")
      return
    }
    
    this.http.get(this.linkedinLogin.web_server+"/auth/session/destroy/"+localStorage.getItem("sessionId")).subscribe(res => {
      var status:any = res
      if (status.session = "destroyed") localStorage.removeItem("sessionId")
    }, err => {
      console.log("error: could not sign out: "+err);
    })
    this.router.navigate(['/auth']);
  }




}
