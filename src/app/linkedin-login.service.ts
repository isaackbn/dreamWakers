import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LinkedinLoginService {

  website = "isaackbn%2Egithub%2Eio%2Fdreamwakers"//site for: "isaackbn.github.io/dreamwakers"

  LOCAL = "http%3A%2F%2Flocalhost%3A%34%32%30%30%2Fauth%2Fredirect"
  ONLINE = "https%3A%2F%2F"+this.website+"%2Fauth%2Fredirect"

  redirectUri = this.ONLINE //for deployment, change to: this.ONLINE
  state="DCEeFWg45A53sdfKef424"
  scope = "r_basicprofile"
  clientId = "77bhchu07m7fuk"
  clientSecret = "r3cyzu4ucuerwMD9"

  accessToken;

  constructor(private http:HttpClient) { }

  login(){this.fetchAutorizationCode()} //redirects to auth-redirect -> this.fethAccessToken(code)
  private fetchAutorizationCode(){
    this.http.get("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+this.clientId+"&redirect_uri="+this.redirectUri+"&state="+this.state+"&scope="+this.scope)
  }

  
  fetchAccessToken(code){
    
    // let body = new URLSearchParams();
    // body.set('grant_type', 'authorization_code');
    // body.set('code', code);
    // body.set('redirect_uri', this.redirectUri);
    // body.set('client_id', this.clientId);
    // body.set('client_secret', this.clientSecret);

    let body = "grant_type=authorization_code&code="+code+"&redirect_uri="+this.redirectUri+"&client_id="+this.clientId+"&client_secret="+this.clientSecret
    console.log(body);
    
    
    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
    this.http
        .post('https://www.linkedin.com/oauth/v2/accessToken', body, options)
        .subscribe(data => {
            console.log(data);
            this.accessToken = data[0].access_token
        });


    
  }

}
