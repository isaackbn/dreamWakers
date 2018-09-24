import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'
import { Router, NavigationEnd} from '@angular/router'



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId;
  user;

  constructor(private data:DataService, private route:ActivatedRoute, private router:Router) { 
    this.route.params.subscribe(params => this.userId = params.id)    
  }

  ngOnInit() {
    this.data.user.subscribe( userData => this.user = userData )
    this.data.getUser(this.userId, null)
  }

  hasData(){
    return (typeof this.user != 'undefined')
  }

}
