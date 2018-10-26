import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { DataService } from '../../services/data.service'
import { BucketService } from '../../services/bucket.service'
import {ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DataType } from '../../support-ts/dataTypes'
import { NgxSmartModalService } from 'ngx-smart-modal';





@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, AfterViewInit {
  
  launchAccountTypeModal = false;
  launchDwFormModal = false

  showFilter = false

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
              private bucket:BucketService,
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

    //DW form data
    this.bucket.dwForm.subscribe(data => {      
      if((data as DataType.dwForm).target == "topbar-component"){
        this.dwForm = data as DataType.dwForm        
        this.ngxSmartModalService.getModal("dwform").open()
      }
    })

    //DATA REQUESTS
    this.data.getProfile(null) //for now, emits profile data
    this.bucket.clientMonitor.next({
      innerWidth:window.innerWidth,
      marginLeft:Math.floor((window.innerWidth - 1218)/2)
    })
    //screen size css data
    this.bucket.clientMonitor.subscribe(data => this.marginLeft = (data as DataType.clientMonitor).marginLeft)
  }

  updateProfileType(type){
    this.ngxSmartModalService.getModal("accounttype").close()    
    this.data.updateProfileType(type)
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
    //if(this.currentUrl != "home" && word != "")this.router.navigate(['home/search/'+word])
    if (word != ""){
      this.bucket.search.showRes.next(true)
      this.data.getSpeakers(word,null)
    }else {
      this.bucket.search.showRes.next(false)
      this.data.getSpeakers("*null*",null)
    }
  }
  searchBarClicked(word){
    if (word != "") setTimeout( () => this.bucket.search.showRes.next(true), 2)
  }

  showProfile(){    
    this.router.navigate(['profile/'+localStorage.getItem("sid")])
  }

  toggleFilter(){
    this.showFilter = !this.showFilter    
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.bucket.clientMonitor.next({
      innerWidth:window.innerWidth, 
      marginLeft:Math.floor((window.innerWidth - 1218)/2)
    })
  }
  

  getMarginLeft(){
    if (this.marginLeft >= 5) return this.marginLeft - 22 + "px"
    return -7 + "px"
  }


}
