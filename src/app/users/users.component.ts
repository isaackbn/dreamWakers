import { Component, OnInit, Optional } from '@angular/core';
import { DataService} from '../data.service'
import { Observable} from 'rxjs'
import { Router } from '@angular/router'
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users$: Object
  message:String = `Users are *dynamically* added - can't type them in (unless you want to?). Every signup (with linkedin) creates a new available
  user and attaches relevant info. Users will be filtered for easy display - e.g. by location or name. The set of data printed bellow was loaded from the database - try selecting one.
  (This info box is how you can talk to all users).`

  constructor( private data: DataService, public router:Router) {}

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

  showDetails(id){
    this.router.navigate(['details/'+id])
  }

}
