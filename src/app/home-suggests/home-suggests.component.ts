import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
import { Observable} from 'rxjs'
import { Router } from '@angular/router'
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'
import {ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-suggests',
  templateUrl: './home-suggests.component.html',
  styleUrls: ['./home-suggests.component.scss'],
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
export class HomeSuggestsComponent implements OnInit, AfterViewInit {

  users$: Object
  suggestedCount:Number = 7
  @ViewChild('moreUsersId') moreUsersId: ElementRef;

  constructor(private data: DataService, public router:Router) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }
  ngAfterViewInit() {
    this.moreUsersId.nativeElement.focus();
 }
  showDetails(id){
    this.router.navigate(['details/'+id])
  }

}