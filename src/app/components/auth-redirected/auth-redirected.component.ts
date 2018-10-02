import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'
import { LinkedinLoginService} from '../../services/linkedin-login.service'
import { DataService} from  '../../services/data.service'
import { AuthService } from '../../services/auth.service'


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

  pageText = "If you are not redirected automatically, Please Sign out from the linkedin website and try again."

  userData;

  constructor(private route:ActivatedRoute, private router:Router,
              private linkedinLoginService:LinkedinLoginService,
              private data:DataService, private auth:AuthService) {

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
        this.linkedinLoginService.authorization_code = this.linkedinCode
        this.linkedinLoginService.fetchProfileData().subscribe( res => {
          var resp:any = res;          
          if (resp.auth == "success") this.data.emitProfileData(resp, "route/home")
          else if (resp.err == "userIn") this.router.navigate(['/home'])
          else if (resp.err == "sExpired") {this.router.navigate(['/auth']); console.log("please sign in again")}
          else this.router.navigate(['/auth']) //other errors
          
        }, 
        err => { if(err.status == 0) this.oopsMessage() })
      }else{//error with code acquisition
        console.log("error - access code not retrieved");
        //show this.linkedinErrorDescription
      }
    }

  }  

  oopsMessage(){
    this.pageText = "Oops..  this service is not available. Contact us for more information."
    setTimeout(() => {
      setTimeout(() => {
        this.router.navigate(['/auth'])
      }, 4000);
      this.pageText = "We are working on the issue, please try again later."
    }, 4000);
  }



}
