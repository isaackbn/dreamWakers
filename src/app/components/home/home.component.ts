import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { Observable} from 'rxjs'
import { Router } from '@angular/router'
import { AlertService } from '../../services/alert.service'
import { AuthService } from '../../services/auth.service'
import { NgxSmartModalService } from 'ngx-smart-modal';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profileData;
  firstName;
  // launchModal = false;

  alertDisabled:boolean = false
  alertsData;
  alert = {
    title : "",
    body : "",
    empty: true
  }


  constructor( private data: DataService, public router:Router, public alertService:AlertService,
                public ngxSmartModalService: NgxSmartModalService, public route:ActivatedRoute,
              public auth:AuthService) {
    
    this.route.params.subscribe(params => this.searchSpeaker(params.word))    

  }
  


  ngOnInit() {
    
    // this.profileData = this.data.profile.subscribe( profileData => { // init subscriber for profile data emitter
    //   this.firstName = profileData.firstName
    //   if (profileData.type == null) this.launchModal = true
    // }) 

    this.alertsData = this.alertService.alerts.subscribe( alertsData => {
      if (alertsData.tag == "main"){
        if (alertsData.status != "empty") this.alert.empty = true        
        this.alert.title = alertsData.title
        this.alert.body = alertsData.body
      }

    })
    this.alertService.getAlert("main", null)

  }


  //called from html if launchModal == true
  // initModal(){this.launchModal = false; this.ngxSmartModalService.getModal("profileType").open()}

  //if profile type selected, close modal and update db
  // updateProfileType(type){
  //   this.ngxSmartModalService.getModal("profileType").close()    
  //   this.data.updateProfileType(type).subscribe()
  //   location.reload()
  // }


  showDetails(id){
    this.router.navigate(['profile/'+id])
  }


  closeMainAlert(){
    this.alert.empty = true;
    this.alertService.sawAlert("main", null)
  }


  ngOnDestroy(){
    // this.profileData.unsubscribe();
    this.alertsData.unsubscribe();
  }

  searchSpeaker(word){
    this.data.getSpeakers(word, null)
  }



}
