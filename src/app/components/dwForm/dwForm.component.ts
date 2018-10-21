import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { ModalsService } from '../../services/modals.service'
import { ModalsData} from '../../modalsDataTypes'



  

@Component({
  selector: 'app-dwForm',
  templateUrl: './dwForm.component.html',
  styleUrls: ['./dwForm.component.scss']
})
export class dwFormComponent implements OnInit {

  marginLeft
  userDataService:any
  form:ModalsData.dwForm = {
    ratio:null, 
    answered:null,
    notAnswered:null,
    received:false,
    skip:false,
    target:null,
  }
  showForm = true

  profileType = ""

  

  constructor(private data:DataService, 
              private modals:ModalsService) {
    this.userDataService = this.data.profile.subscribe( profileData => this.profileType = profileData.type )
    this.data.screenData.subscribe( data => this.marginLeft = data.marginLeft )
    this.modals.dwFormBucket.subscribe( data => { if ((data as ModalsData.dwForm).target == "dwForm") this.form = data as ModalsData.dwForm })


    this.data.reqScreenData()
    this.data.getProfile(null)
  }

  ngOnInit() {

  }

  isProfileType(userType){ return userType == this.profileType }
  setColorFor(userType){
    if (userType == this.profileType) return "#38a3a5"
    return "rgb(43, 43, 43)"
  }
  toggleProfileType(sender){
    if (sender == "speaker" && this.profileType == "teacher"){
      this.data.updateProfileType("speaker").subscribe()
      this.profileType = "speaker"
    }
    else if (sender == "teacher" && this.profileType == "speaker"){
      this.data.updateProfileType("teacher").subscribe()
      this.profileType = "teacher"
    }
  }


  getMarginLeft(){
    if (this.marginLeft >= 5) return this.marginLeft+928-15
    return 928
  }


  skipForm(){
    this.showForm = false
    this.form.skip = true //skip is always set to true from forms-dw..
    this.form.target = "topbar"
    this.modals.dwFormEmit(this.form)
  }

}
