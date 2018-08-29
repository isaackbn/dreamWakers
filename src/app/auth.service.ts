import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UserIn = false//(localStorage.getItem("isUserIn") === "true")
  private username

  constructor(private http:HttpClient) {}

  setUserIn(){
    //localStorage.setItem("isUserIn", "true")
    this.UserIn = true
  }

  isUserIn(){
    //if (this.isUserIn) return true;
    //this.http.get <any>('https://dreamwakers.herokuapp.com/auth/isLoggedIn').pipe(map(res => {
      //console.log(res);
      
      return false
    //}))
  }

  signOut(){
    //localStorage.removeItem("isUserIn")
    this.UserIn = false    
  }

}
