import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { DataService } from '../../services/data.service'
import {ViewChild, ElementRef, AfterViewInit } from '@angular/core';




@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, AfterViewInit {

  currentUrl: String
  firstName = ""
  lastName = ""
  userDataService:any;
  profilePicSrc =""
  seeTabElements = false
  notifications;

  @ViewChild('searchBarId') searchBarId: ElementRef;

  constructor(private router:Router, 
              private auth:AuthService,
              private data:DataService) {
    
      router.events.subscribe( (e: NavigationEnd) => {
        if (e instanceof NavigationEnd) this.currentUrl = e.url;
      })
      
   }

  ngOnInit() {
    
    //if (localStorage.getItem("sessionId") == null){localStorage.clear();this.signOut()}

    this.userDataService = this.data.profile.subscribe( profileData => {
      this.firstName = profileData.firstName
      this.lastName = profileData.lastName.charAt(0)
      this.profilePicSrc = profileData.pictureUrl
      this.notifications = profileData.notifications
      
      this.updateTabElements()
      if (typeof this.profilePicSrc == "undefined") this.profilePicSrc = "assets/img/blank.png" //after logging out
      if (typeof profileData.order != "undefined" && profileData.order == "sign out") this.signOut()
      if (profileData.action == "signedUp") this.reload() // refresh page to get signup modal
    })
    this.data.getProfile() //for now, emits profile data
  }


  updateTabElements(){   
    if (this.hasData) this.seeTabElements = true
    else this.seeTabElements = false
  }

  hasData(){
    if (this.firstName != "") return true
    else return false
  }

  signedIn(){
    return this.auth.isUserIn()
  }

  signOut(){
    this.firstName = ""
    this.profilePicSrc ="assets/img/blank.png"
    this.seeTabElements = false
    if(!this.userDataService == null){
      this.userDataService.unsubscribe();   
    }
    this.router.navigate(['/auth']);
    this.data.signOut()
  }

  reload(){ location.reload()}

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

  
  

}
