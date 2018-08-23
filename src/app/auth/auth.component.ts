import { Component, OnInit } from '@angular/core';
import { LinkedinLoginService } from '../linkedin-login.service'
import { Observable} from 'rxjs'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  redirectUri
  state
  scope
  clientId
  loginLink


  constructor(private linkedinLoginService:LinkedinLoginService) { 
    this.redirectUri = linkedinLoginService.redirectUri
    this.state = linkedinLoginService.state
    this.scope = linkedinLoginService.scope
    this.clientId = linkedinLoginService.clientId
    this.loginLink = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+this.clientId+"&redirect_uri="+this.redirectUri+"&state="+this.state+"&scope="+this.scope
  }



  ngOnInit() {
  }


}
