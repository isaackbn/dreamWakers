import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'
import { LinkedinLoginService} from '../linkedin-login.service'

@Component({
  selector: 'app-auth-redirected',
  templateUrl: './auth-redirected.component.html',
  styleUrls: ['./auth-redirected.component.scss']
})
export class AuthRedirectedComponent implements OnInit {

  linkedinCode;
  linkedinError;
  linkedinErrorDescription;
  linkedinReceivedState;
  fetchedCode;

  userData;

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
    if (this.linkedinLoginService.state == this.linkedinReceivedState){
      if (this.fetchedCode){
        this.linkedinLoginService.code = this.linkedinCode
        this.linkedinLoginService.fetchUserData().subscribe(data=>{this.userData=data;

        console.log(this.userData)

        })
      }else{//error with code acquisition
        //show this.linkedinErrorDescription
      }
    }
  }  

}
