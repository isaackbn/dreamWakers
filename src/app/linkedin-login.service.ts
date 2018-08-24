import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { encode } from 'punycode';


/* 
  #to serve from 
      localhost, set 
            "online" to "false"
            "local_port" to your local port value, e.g: "4200"
      website, set
            "online" to "true"
            "website" to your linkedin-saved web host value, e.g: "mywebsite.com"
  
  #set "path_for_auth" to your linkedin redirect path, e.g: "/auth/redirected"

  note: in your linkedin settings, the "website" and "path_for_auth" values are merged in the "Authorized Redirect URLs"
  e.g: "https://mywebsite.com/auth/redirected"
*/

@Injectable({
  providedIn: 'root'
})
export class LinkedinLoginService {
  authorization_code; redirectUri;



  //SET TO APPROPRIATE VALUES

  online = true
  
  //the front-end distributor handles the request for the linkedin authorization code
  website = "https://isaackbn/github.io/dreamwakers"// ignore if online = false
  local_port: string = "4200"// ignore if online = true
  path_for_auth = "/auth/redirected"
  

  state = "DCEeFWg45A53sdfKef424"
  scope = "r_basicprofile"
  clientId = "77bhchu07m7fuk"

  //the back-end handles the request for access token and returns user data
  web_server = "https://dreamwakers.herokuapp.com"
  path_to_complete_and_transfer_authRequest = "/linkedin/auth"





  /* DO NOT MODIFY */

  constructor(private http:HttpClient) {
    this.website = encodeURIComponent(this.website)
    this.local_port = encodeURIComponent(this.local_port)
    this.path_for_auth = encodeURIComponent(this.path_for_auth) 
    
    if (this.online){this.redirectUri = this.website+this.path_for_auth}
    else this.redirectUri = encodeURIComponent("http://localhost:")+this.local_port+this.path_for_auth

  }
  fetchUserData(){ //called from auth-redirected
    return this.http.get(this.web_server+this.path_to_complete_and_transfer_authRequest+"/"+this.authorization_code+"/"+this.redirectUri+"/"+this.clientId)
  }

}
