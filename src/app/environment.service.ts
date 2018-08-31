import { Injectable } from '@angular/core';
import { encode } from 'punycode';
import { encodeUriFragment } from '../../node_modules/@angular/router/src/url_tree';


/* 
  #to serve from 
      localhost, set 
            "online" to "false"
            "local_port" to your local port value, e.g: "4200"
      website, set
            "online" to "true"
            "website" to your linkedin-saved web host value
  #to connect to 
      local_server, set 
            "serverOnline" to "false"
            "local_port" to your local_server port value, e.g: "5000"
      webHosted_server, set
            "serverOnline" to "true"
            "webHosted_server" to your server web address
*/


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  /* SET TO APPROPRIATE VALUES */

  online = false
  serverOnline = false
  

  //the front-end distributor
  website = "https://isaackbn.github.io/dreamwakers"
  local_port: string = "4200"
  

  //the back-end service
  webHosted_server = "https://dreamwakers.herokuapp.com"
  local_server_port: string = "5000"





  getFrontEndWebsite(str){
    if (this.online){
      if (str == "encode") return encodeURIComponent(this.website).replace(/\./g, '%2E')
      else return this.website
    }
    else {
      console.log(encodeURIComponent(this.website).replace(/\./g, '%2E'));
      
      if (str == "encode") return encodeURIComponent("http://localhost:")+encodeURIComponent(this.local_port)
      else return "http://localhost:"+this.local_port
    }
  }

  getServer(str){
    if (this.serverOnline) {
      if (str == "encode") return encodeURIComponent(this.webHosted_server)
      else return this.webHosted_server
    }
    else {
      if (str == "encode") return encodeURIComponent("http://localhost:")+encodeURIComponent(this.local_server_port)
      else return "http://localhost:"+this.local_server_port
    }
  }
  


  constructor() { }




}
