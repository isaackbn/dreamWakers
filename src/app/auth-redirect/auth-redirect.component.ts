import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'
import { LinkedinLoginService} from '../linkedin-login.service'

@Component({
  selector: 'app-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styleUrls: ['./auth-redirect.component.scss']
})
export class AuthRedirectComponent implements OnInit {

  linkedinCode;
  linkedinError;
  linkedinErrorDescription;
  linkedinReceivedState;
  fetchedCode;

  constructor(private route:ActivatedRoute, private router:Router, private linkedinLoginService:LinkedinLoginService) {
    if(router.routerState.snapshot.root.queryParams.code != null){
      this.linkedinCode = router.routerState.snapshot.root.queryParams.code
      this.fetchedCode = true
    }else{
      this.linkedinError = router.routerState.snapshot.root.queryParams.console.error
      this.linkedinErrorDescription = router.routerState.snapshot.root.queryParams.error_description
      this.fetchedCode = false
    }
    this.linkedinReceivedState = router.routerState.snapshot.root.queryParams.state

  }

  ngOnInit() {
    console.log(this.linkedinCode);
    if (this.linkedinLoginService.state == this.linkedinReceivedState){
      if (this.fetchedCode){
        this.linkedinLoginService.fetchAccessToken(this.linkedinCode)
      }else{
        //show this.linkedinErrorDescription
      }
    }
  }

}
