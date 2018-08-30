import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'
import { AuthService } from '../auth.service'
import { DataService } from '../data.service'



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  currentUrl: String
  fullName;

  constructor(private router:Router, 
              private auth:AuthService,
              private data:DataService) {
    router.events.subscribe( (e: NavigationEnd) => {
      if (e instanceof NavigationEnd) {
      this.currentUrl = e.url;
      }
    })

    

   }

  ngOnInit() {
    //this.fullName = this.data.profileData.firstName+" "+this.data.profileData.lastName
  }

  signedIn(){
    return this.auth.isUserIn()
  }

  signOut(){
    this.auth.signOut()
    this.router.navigate(['/auth']);
  }
}
