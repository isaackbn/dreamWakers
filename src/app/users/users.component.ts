import { Component, OnInit, Optional } from '@angular/core';
import { DataService} from '../data.service'
import { Observable} from 'rxjs'
import { Router } from '@angular/router'
import { AlertService } from '../alert.service'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users$: Object

  alertDisabled:boolean = false
  alert = {
    title : "",
    body : "",
    empty: () => {if (this.alert.title=="" && this.alert.body == "" || this.alertDisabled==true)return true},
    close: () => {this.alertDisabled = true}
  }

  constructor( private data: DataService, public router:Router, public alertRes:AlertService) {}

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
    this.alertRes.mainAlert().subscribe(
      alert => {
        this.alert.title = alert[0].title
        this.alert.body = alert[0].body
      }
    )
  }

  showDetails(id){
    this.router.navigate(['details/'+id])
  }

}
