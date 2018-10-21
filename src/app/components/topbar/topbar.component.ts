import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { DataService } from '../../services/data.service'
import { ModalsService } from '../../services/modals.service'
import {ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ModalsData } from '../../modalsDataTypes'
import { NgxSmartModalService } from 'ngx-smart-modal';





@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, AfterViewInit {
  
  launchAccountTypeModal = false;
  launchDwFormModal = false

  showFilter = true

  marginLeft
  dwForm = {
    ratio: null,answered:null,notAnswered:null,received:null, //irrelevant for now
    skip:false //topbar relevant
  }
  currentUrl: String
  profile = {
    fName: "",
    lName: "",
    picUrl: "",
    type: null,
    notifications: null,
    hasData: false
  }
  
  userDataService:any;
  seeTabElements = false
  ;

  @ViewChild('searchBarId') searchBarId: ElementRef;

  constructor(private router:Router, 
              private auth:AuthService,
              private data:DataService,
              private modals:ModalsService,
              private ngxSmartModalService:NgxSmartModalService) {
    
      router.events.subscribe( (e: NavigationEnd) => {
        if (e instanceof NavigationEnd) this.currentUrl = e.url;
      })
   }

  ngOnInit() {
    //DATA RECEPTION
    //profile data
    this.userDataService = this.data.profile.subscribe( profileData => {
      this.profile.hasData = true      
      this.profile.fName = profileData.firstName
      this.profile.lName = profileData.lastName.charAt(0)
      this.profile.picUrl = profileData.pictureUrl
      this.profile.notifications = profileData.notifications
      this.profile.type = profileData.type
      if (this.profile.type == null) this.ngxSmartModalService.getModal("accounttype").open()
      else if (true) this.ngxSmartModalService.getModal("dwform").open() //check that use has not completed forms
      this.updateTabElements()
      if (typeof profileData.order != "undefined" && profileData.order == "sign out") this.signOut()
      //if (profileData.action == "signedUp") location.reload() // refresh page to get signup modal
    })
    //screen size css data
    this.data.screenData.subscribe(data => this.marginLeft = data.marginLeft)
    //DW form data
    this.modals.dwFormBucket.subscribe(data => {      
      if((data as ModalsData.dwForm).target == "topbar"){
        this.dwForm = data as ModalsData.dwForm        
        this.ngxSmartModalService.getModal("dwform").open()
      }
    })

    //DATA REQUESTS
    this.data.getProfile(null) //for now, emits profile data
    this.data.emitScreenData({
      innerWidth:window.innerWidth,
      marginLeft:Math.floor((window.innerWidth - 1218)/2)
    })
  }

  updateProfileType(type){
    this.ngxSmartModalService.getModal("accounttype").close()    
    this.data.updateProfileType(type).subscribe()
    location.reload()
  }

  updateTabElements(){   
    if (this.profile.hasData) this.seeTabElements = true
    else this.seeTabElements = false
  }


  signedIn(){
    return this.auth.isUserIn()
  }

  signOut(){
    this.profile = {
      fName: "",
      lName: "",
      picUrl: "",
      type: null,
      notifications: null,
      hasData: false
    }
    this.seeTabElements = false
    if(!this.userDataService == null) this.userDataService.unsubscribe()
    this.router.navigate(['/auth']);
    this.data.signOut()
  }


  ngAfterViewInit() {
    if(this.seeTabElements) this.searchBarId.nativeElement.focus()    
 }


  newSearch(word){
    if(this.currentUrl != "home" && word != "")this.router.navigate(['home/search/'+word])
    if (word != "") this.data.getSpeakers(word,null)
    else this.data.getSpeakers("*null*",null)
  }

  showProfile(){    
    this.router.navigate(['profile/'+localStorage.getItem("sid")])
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.data.emitScreenData({
      innerWidth:window.innerWidth, 
      marginLeft:Math.floor((window.innerWidth - 1218)/2)
    })
  }
  

  getMarginLeft(){
    if (this.marginLeft >= 5) return this.marginLeft - 22
    return -7
  }
  

}
