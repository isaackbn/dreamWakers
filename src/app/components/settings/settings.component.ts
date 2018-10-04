import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userDataService:any


  fName = ""
  lName = ""
  age = "_____"; ageStr=" years old"

  fName_width = "20"
  lName_width = "30"
  age_width = "100"
  education_width = "100"
  industry_width = "100"
  fullWidth = "100"

  gender = "other"

  race = "notSpecified"

  education = "____"; educationStr="Education:   "
  industry = "____"; industryStr="Industry:      "

  service = ""



  


  constructor(private data:DataService) {
    this.userDataService = this.data.profile.subscribe( profileData => {
      this.fName = profileData.firstName
      this.lName = profileData.lastName
      if (profileData.industry!="") this.industry = profileData.industry
      this.service = profileData.type
    })
    this.data.getProfile()
  }

  ngOnInit() {

  }

  //NAME
  fNameClick(event){
    event.target.select()
  }
  lNameClick(event){
    event.target.select()
  }


  //AGE
  ageChange(event, action){ 
    var value = event.target.value
    event.target.blur()   
    this.age_width = "100"
    if (value == this.age+this.ageStr) value = this.age
    if (value != "") this.age = value
    this.ageStr = " years old"
  }
  ageClick(event){
    this.age_width = "10"
    event.target.select()
  }



  //GENDER
  setGender(type){
    return type == this.gender
  }

  //RACE
  setRace(type){
    return type == this.race
  }



  //EDUCATION
  educationChange(event, action){ 
    var value = event.target.value
    event.target.blur()   
    this.education_width = "100"
    if (value == this.education+this.educationStr) value = this.education
    if (value != "") this.education = value
    else this.education = "____"
    this.educationStr="Education:   "
  }
  educationClick(event){
    this.education = ""
    this.educationStr = ""
    this.education_width = "50"
    event.target.select()
  }


   //INDUSTRY
   industryChange(event, action){ 
    var value = event.target.value
    event.target.blur()   
    this.industry_width = "100"
    if (value == this.industry+this.industryStr) value = this.industry
    if (value != "") this.industry = value
    else this.industry = "____"
    this.industryStr = "Industry:      "
  }
  industryClick(event){
    this.industry = ""
    this.industryStr = ""
    this.industry_width = "50"
    event.target.select()
  }



  //SERVICE
  setService(type){
    return type == this.service
  }


}
