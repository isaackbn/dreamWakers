import { Component, OnInit } from '@angular/core';
import { LinkedinLoginService } from '../linkedin-login.service'
import { Observable} from 'rxjs'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'




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


  constructor(private linkedinLoginService:LinkedinLoginService,
              private authService:AuthService,
              private router:Router) { 
    this.loginLink = this.linkedinLoginService.getCode_link()
    


  }



  ngOnInit() {



  }


}
