import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { encode } from 'punycode';
import { encodeUriFragment } from '@angular/router/src/url_tree';
import { EnvironmentService } from './environment.service'
import { CookieService } from 'ngx-cookie-service';
import { Observable} from 'rxjs'
import { DataService } from './data.service'





/* 
  #set "path_for_auth" to your linkedin redirect path, e.g: "/auth/redirected"

  note: in your linkedin settings, the "website" and "path_for_auth" values are merged in the "Authorized Redirect URLs"
  e.g: "https://mywebsite.com/auth/redirected"
*/

@Injectable({
  providedIn: 'root'
})
export class LinkedinLoginService {
  

  /* SET TO APPROPRIATE VALUES */

  path_for_auth_request = "/auth/init"

  state = "DCEeFWg45A53sdfKef424"
  scope = "r_basicprofile"
  clientId = "77bhchu07m7fuk"
  path_for_auth = "/auth/redirected"


  


  /* DO NOT MODIFY */

  authorization_code; redirectUri;
  //the front-end distributor handles the request for the linkedin authorization code
  website;
  //the back-end handles the request for access token and returns user data
  web_server; //"https://dreamwakers.herokuapp.com"


  constructor(private http:HttpClient, 
              private envir:EnvironmentService, 
              private cookies:CookieService,
              private dataService:DataService) {
    this.website = envir.getFrontEndWebsite("encode")
    this.web_server = envir.getServer("noEncode")

    this.path_for_auth = encodeURIComponent(this.path_for_auth)

    this.redirectUri = this.website+this.path_for_auth

  }


  getCode_link(){ //called from auth
    return "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+this.clientId+"&redirect_uri="+this.redirectUri+"&state="+this.state+"&scope="+this.scope
  }


  fetchProfileData(){ //called from auth-redirected
    this.dataService.clearStorage()
    return this.http.get(this.web_server+this.path_for_auth_request+"/"+this.authorization_code+"/"+this.redirectUri+"/"+this.clientId)
  }





}
