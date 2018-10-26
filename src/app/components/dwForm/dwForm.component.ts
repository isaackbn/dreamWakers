import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { BucketService } from '../../services/bucket.service'
import { DataType} from '../../support-ts/dataTypes'



  

@Component({
  selector: 'app-dwForm',
  templateUrl: './dwForm.component.html',
  styleUrls: ['./dwForm.component.scss']
})
export class dwFormComponent implements OnInit {

  marginLeft
  userDataService:any

  form:DataType.dwForm = {
    profileType:null,
    ratio:null, 
    answered:null,
    notAnswered:null,
    received:false,
    skip:false,
    target:null,
  }
  showForm = true

  

  constructor(private data:DataService, 
              private bucket:BucketService) {
    this.userDataService = this.data.profile.subscribe( profileData => this.form.profileType = profileData.type )
    this.bucket.clientMonitor.subscribe( data => this.marginLeft = (data as DataType.clientMonitor).marginLeft )
    this.bucket.dwForm.subscribe( data => { var dwForm = (data as DataType.dwForm)
      if (dwForm.target == "dwForm-component"){
        var profileType = dwForm.profileType
        dwForm.profileType = null //hides form values bc type of form is not known
        this.form = dwForm
        this.form.profileType = profileType
        //this.form = dwForm      
      }      
    })


    this.data.getProfile(null)
  }

  ngOnInit() {

  }

  isProfileType(userType){ return userType == this.form.profileType }
  setColorFor(userType){

    if (userType == this.form.profileType) return "#38a3a5"
    return "rgb(43, 43, 43)"
  }
  toggleProfileType(sender){
    if (sender == "speaker" && this.form.profileType == "teacher")this.data.updateProfileType("speaker")
    else if (sender == "teacher" && this.form.profileType == "speaker")this.data.updateProfileType("teacher")
  }


  getMarginLeft(){
    if (this.marginLeft >= 5) return this.marginLeft+928-15
    return 928
  }


  skipForm(){
    this.showForm = false
    this.form.skip = true //skip is always set to true from forms-dw..
    this.form.target = "topbar-component"
    this.bucket.dwForm.next(this.form)
  }

}
