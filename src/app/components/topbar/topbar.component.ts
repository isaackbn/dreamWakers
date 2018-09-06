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
  fullName = ""
  userDataService:any;

  constructor(private router:Router, 
              private auth:AuthService,
              private data:DataService) {
    
      router.events.subscribe( (e: NavigationEnd) => {
        if (e instanceof NavigationEnd) this.currentUrl = e.url;
      })
   }

  ngOnInit() {
    this.userDataService = this.data.getUserDataEmitter().subscribe( userData => {
      this.fullName = userData.firstName
    })
  }


  update(){
    this.fullName = this.data.profileData.firstName
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
