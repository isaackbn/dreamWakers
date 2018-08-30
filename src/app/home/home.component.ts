import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service'
import { Observable} from 'rxjs'
import { Router } from '@angular/router'
import { AlertService } from '../alert.service'
import { AuthService } from '../auth.service'
import { TopbarComponent} from '../topbar/topbar.component'

@Component({
  providers:[TopbarComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: Object

  alertDisabled:boolean = false
  alert = {
    title : "",
    body : "",
    empty: () => {if (this.alert.title=="" && this.alert.body == "" || this.alertDisabled==true)return true},
    close: () => {this.alertDisabled = true}
  }

  constructor( private data: DataService, public router:Router, public alertRes:AlertService,
                private auth:AuthService,
                private topBar:TopbarComponent) {}

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
    this.topBar.ngOnInit()
  }

  showDetails(id){
    this.router.navigate(['details/'+id])
  }


}
