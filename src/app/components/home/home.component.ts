import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { Observable} from 'rxjs'
import { Router } from '@angular/router'
import { AlertService } from '../../services/alert.service'
import { AuthService } from '../../services/auth.service'
import { TopbarComponent} from '../topbar/topbar.component'
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  providers:[TopbarComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: Object
  launchModal = true;
  firstName;

  alertDisabled:boolean = false
  alert = {
    title : "",
    body : "",
    empty: () => {if (this.alert.title=="" && this.alert.body == "" || this.alertDisabled==true)return true},
    close: () => {this.alertDisabled = true}
  }

  constructor( private data: DataService, public router:Router, public alertRes:AlertService,
                private auth:AuthService,
                private topBar:TopbarComponent,
                public ngxSmartModalService: NgxSmartModalService) {
    if(localStorage.getItem("profileType") != "set") this.launchModal = true; 
  }
  
  ngOnInit() {
    this.data.tryPersist()
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

  initModal(){
    this.firstName = localStorage.getItem("firstName")
    if(localStorage.getItem("profileType") != "set") this.ngxSmartModalService.getModal("profileType").open()
    this.launchModal = false
  }

  updateProfileType(type){
    this.ngxSmartModalService.getModal("profileType").close()    
    this.data.updateProfileType(type).subscribe(res => {
      console.log(res);
    })
  }


  showDetails(id){
    this.router.navigate(['details/'+id])
  }

}
