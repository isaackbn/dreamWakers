import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.scss']
})
export class FormsLoginComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
  
    var username = form.value.username
    var password = form.value.password
    
    // if(username=="" && password==""){
    //   this.router.navigate(["/home"])
    // }

  }

}
