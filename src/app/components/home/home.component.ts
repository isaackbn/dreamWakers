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

  profileData;
  launchModal = false;
  firstName;

  //alert management
  alertDisabled:boolean = false
  alert = {
    title : "",
    body : "",
    empty: () => {if (this.alert.title=="" && this.alert.body == "" || this.alertDisabled==true)return true},
    close: () => {this.alertDisabled = true}
  }

  constructor( private data: DataService, public router:Router, public alertService:AlertService,
                public ngxSmartModalService: NgxSmartModalService) {
  }
  

  //init management
  ngOnInit() {
    this.profileData = this.data.profile.subscribe( profileData => { // init subscriber for profile data emitter
      this.firstName = profileData.firstName
      if (profileData.type == null) this.launchModal = true
    }) 

    this.alertService.mainAlert().subscribe(
      alert => {
        this.alert.title = alert[0].title
        this.alert.body = alert[0].body
      }
    )

  }


  //called from html if launchModal == true
  initModal(){this.launchModal = false; this.ngxSmartModalService.getModal("profileType").open()}
  //if profile type selected, close modal and update db
  updateProfileType(type){
    this.ngxSmartModalService.getModal("profileType").close()    
    this.data.updateProfileType(type).subscribe()
  }


  showDetails(id){
    this.router.navigate(['details/'+id])
  }



  ngOnDestroy(){
    this.profileData.unsubscribe();
  }

}
