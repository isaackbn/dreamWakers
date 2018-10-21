import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map, timeInterval } from 'rxjs/operators'
import { Observable} from 'rxjs'
import { EnvironmentService } from './environment.service'
import { LinkedinLoginService} from './linkedin-login.service'
import { Router, NavigationEnd} from '@angular/router'




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  order: EventEmitter<object> = new EventEmitter(); //subscriptions: topbar
  serverError = false
  active = false

  isActive: EventEmitter<boolean> = new EventEmitter(); //subscriptions: topbar, home, auth-redirect

  constructor(private http:HttpClient, 
              private envir:EnvironmentService ,
              private linkedinLogin:LinkedinLoginService,
              private router:Router
            ) {}


  isUserIn(){ // -> bool
    if(localStorage.getItem("sid") == "") this.signOut()
    if (localStorage.getItem("sid") != null){
      if (this.active) return true
      if (!this.serverError) return this.http_isUserIn()
      else return false
    }
    else return false
  }
  //helper
  http_isUserIn(){
    return this.http.get<any>(this.linkedinLogin.web_server+"/auth/session/isactive/"+localStorage.getItem("sid")).subscribe(res => {
      if (res.sid == 1) {
        this.active = true
        return true
      }else {
        localStorage.removeItem("sid")
        this.signOut()
        return false
      }
    }, err => {
      this.serverError = true
      console.log("Could not verify session: "+err);
      return false
    })
  }

  signOut(){

    if(localStorage.getItem("sid") == ""){
      localStorage.removeItem("sid")
      //localStorage.setItem("userIn", "false")
      return
    }
    
    this.http.get(this.linkedinLogin.web_server+"/auth/session/destroy/"+localStorage.getItem("sid")).subscribe(res => {
      var status:any = res
      if (status.session = "destroyed") {
        localStorage.removeItem("sid")
        this.router.navigate(['/auth']);
      }
    }, err => {
      console.log("error: could not sign out: "+err);
    })

  }




}
