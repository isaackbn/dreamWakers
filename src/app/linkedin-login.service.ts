import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LinkedinLoginService {

  website = "isaackbn%2Egithub%2Eio%2Fdreamwakers"//site for: "isaackbn.github.io/dreamwakers"
  local_port = ""//port for: "4200"

  ONLINE = "https%3A%2F%2F"+this.website+"%2Fauth%2Fredirect"
  LOCAL = "http%3A%2F%2Flocalhost%3A%34%32%30%30%2Fauth%2Fredirect"

  code;
  redirectUri = this.LOCAL //for deployment, change to: this.ONLINE
  state="DCEeFWg45A53sdfKef424"
  scope = "r_basicprofile"
  clientId = "77bhchu07m7fuk"

  constructor(private http:HttpClient) { }

  
  fetchUserData(){ //called from auth-redirect
    
    let body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', this.code);
    body.set('redirect_uri', this.redirectUri);
    body.set('client_id', this.clientId);
  
    return this.http.get('https://dreamwakers.herokuapp.com/linkedin/auth/'+this.code+"/"+this.redirectUri+"/"+this.clientId)

  }

}
