import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { DataService } from '../../services/data.service'



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  currentUrl: String
  firstName = ""
  userDataService:any;
  profilePicSrc =""

  constructor(private router:Router, 
              private auth:AuthService,
              private data:DataService) {
    
      router.events.subscribe( (e: NavigationEnd) => {
        if (e instanceof NavigationEnd) this.currentUrl = e.url;
      })
   }

  ngOnInit() {
    this.userDataService = this.data.getUserDataEmitter().subscribe( userData => {
      this.firstName = userData.firstName
      this.profilePicSrc = userData.pictureUrl
      if (typeof this.profilePicSrc == "undefined") this.profilePicSrc = "assets/img/blank.png" //after logging out
      if (typeof userData.order != "undefined" && userData.order == "sign out") this.signOut() 
    })
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
}
