import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserIn
  private username

  constructor() {
    this.isUserIn = false
   }

  setUserIn(){
    this.isUserIn = true
  }

  getUserIn(){
    return this.isUserIn
  }

  signOut(){
    this.isUserIn = false
  }

}
