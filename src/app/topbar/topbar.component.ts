import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router'
import { AuthService } from '../auth.service'



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  currentUrl: String

  constructor( private router:Router, private auth:AuthService) {
    router.events.subscribe( (e: NavigationEnd) => {
      if (e instanceof NavigationEnd) {
      this.currentUrl = e.url;
      }
    })

    

   }

  ngOnInit() {
  }

  signedIn(){
    return this.auth.getUserIn()
  }

  signOut(){
    this.auth.signOut()
    this.router.navigate(['/auth']);
  }
}
