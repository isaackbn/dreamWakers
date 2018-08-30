import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router'
import { LinkedinLoginService} from '../linkedin-login.service'
import { DataService} from '../data.service'

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

  constructor(private route:ActivatedRoute, private router:Router,
              private linkedinLoginService:LinkedinLoginService,
              private dataService:DataService) {

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
        this.linkedinLoginService.fetchUserData().subscribe( res => {
          if (res[0].auth == "success"){
            this.dataService.saveUserData(res[0])
            localStorage.setItem("userIn","true")
            this.router.navigate(['/home'])
            console.log((localStorage.getItem("userIn")))
          }else{
            console.log("res is: "+res[0])
            console.log(res[0].auth);
            this.router.navigate(['/auth'])
          }
        })
      }else{//error with code acquisition
        console.log("error - access code not retrieved");
        //show this.linkedinErrorDescription
      }
    }
  }  

}
