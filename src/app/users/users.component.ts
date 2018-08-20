import { Component, OnInit, Optional } from '@angular/core';
import { DataService} from '../data.service'
import { Observable} from 'rxjs'
import { Router } from '@angular/router'
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger',[
      transition('* <=> *', [
        query(':enter', [
          style({ opacity:0, transform:'translateY(-15px)'}),
          stagger('50ms',
          animate('500ms ease-out',
          style({opacity:1, transform:'translateY(0px)'})))
        ], {optional : true}),
        query(':leave',animate('50ms ease-out',style({opacity:0,})), {optional : true})
      ])

    ])
  ]
})
export class UsersComponent implements OnInit {

  users$: Object

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
