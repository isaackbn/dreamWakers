import { Component, OnInit } from '@angular/core';
import { LinkedinLoginService } from '../linkedin-login.service'
import { Observable} from 'rxjs'


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private linkedin:LinkedinLoginService) { }

  ngOnInit() {
  }

  login(){
    this.linkedin.getAutorizationCode().subscribe( data => this.redirect(data))
  }

  redirect(data){
    console.log(data);
    
  }

}
