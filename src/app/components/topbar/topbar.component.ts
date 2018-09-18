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

  @ViewChild('searchBarId') searchBarId: ElementRef;

  constructor(private router:Router, 
              private auth:AuthService,
              private data:DataService) {
    
      router.events.subscribe( (e: NavigationEnd) => {
        if (e instanceof NavigationEnd) this.currentUrl = e.url;
      })
      
   }

  ngOnInit() {
    this.userDataService = this.data.profile.subscribe( profileData => {
      this.firstName = profileData.firstName
      this.lastName = profileData.lastName.charAt(0)
      this.profilePicSrc = profileData.pictureUrl
      if (typeof this.profilePicSrc == "undefined") this.profilePicSrc = "assets/img/blank.png" //after logging out
      if (typeof profileData.order != "undefined" && profileData.order == "sign out") this.signOut() //listening to data service
      if (profileData.action == "signedUp") this.reload() // refresh page to get signup modal
    })
    this.data.tryPersist(null) //for now, emits profile data
  }


  hasData(){    
    if (this.firstName != "") return true
    else return false
  }

  signedIn(){
    return this.auth.isUserIn()
  }

  signOut(){
    this.auth.signOut()
    this.userDataService.unsubscribe();
    this.router.navigate(['/auth']);
  }

  reload(){ location.reload()}

  ngAfterViewInit() {
    this.searchBarId.nativeElement.focus();
 }


  newSearch(word){
    if(this.currentUrl != "home" && word != "")this.router.navigate(['home/search/'+word])
    if (word != "") this.data.getSpeakers(word,null)
    else this.data.getSpeakers("*null*",null)
  }

  showProfile(){
    this.router.navigate(['details/'+localStorage.getItem("sessionId")])
  }

  
  

}
