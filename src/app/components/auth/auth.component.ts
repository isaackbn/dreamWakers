import { Component, OnInit } from '@angular/core';
import { LinkedinLoginService } from '../../services/linkedin-login.service'
import { Observable} from 'rxjs'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { NgxSmartModalService } from 'ngx-smart-modal';





@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  loginLink;
  url = "https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4"
  videoTag

  constructor(private linkedinLoginService:LinkedinLoginService,
              private authService:AuthService,
              private router:Router,
              public ngxSmartModalService: NgxSmartModalService) { 
    this.loginLink = this.linkedinLoginService.getCode_link()
    this.videoTag = this.getVideoTag();


  }


  ngOnInit() {

  }


  private getVideoTag() {
    return `<video id="video" muted loop autoplay playsinline disableRemotePlayback>
            <source src="https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>`
  }


}
