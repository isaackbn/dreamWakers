import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'



  

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userDataService:any

  profileType = ""
  

  constructor(private data:DataService) {
    this.userDataService = this.data.profile.subscribe( profileData => {

     

      this.profileType = profileData.type
    })
    this.data.getProfile()
  }

  ngOnInit() {

  }

  setProfileType(type){ return type == this.profileType }
  toggleProfileType(sender){
    if (sender == "speaker" && this.profileType == "teacher") this.profileType = "speaker"
    else if (sender == "teacher" && this.profileType == "speaker") this.profileType = "teacher"
  }

}
