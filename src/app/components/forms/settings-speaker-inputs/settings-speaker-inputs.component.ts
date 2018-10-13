import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service'


class Cache {
  value;title;placeholder;default;hint;color
  colorGood = "#38a3a5"
  colorBad = "#bb3232"
  width = () => "100"//this.title.length+this.value.length * 3.2
  constructor(title,value){
    if (value != "") this.color = this.colorGood
    else this.color = this.colorBad
    this.title = title; 
    this.value = value; 
    this.default = value
    this.placeholder = "Your answer"
  }
}
class Field {
  cache:Cache
  io = {width:(value) => "100"}//value.length * 3.2}
  value; title; width; hint; color
  placeholder; 
  constructor(hint, cache:Cache){
    cache.hint = hint
    this.cache = cache
    this.placeholder = "Your answer"
    this.hint = hint
    this.value = cache.value
    this.title = cache.title
    //this.width = (this.title.length+this.value.length) * 3.2
    this.width = "100"
    this.color = cache.color
  }
}


@Component({
  selector: 'app-settings-speaker-inputs',
  templateUrl: './settings-speaker-inputs.component.html',
  styleUrls: ['./settings-speaker-inputs.component.scss']
})
export class SettingsSpeakerInputsComponent implements OnInit {

  answered:Number


  userDataService:any

  gender = "other"
  race = "notSpecified"

  fields=[]
  fields2=[]

  fName
  lName
  age
  education
  industry
  phoneNum
  mailAddr
  email
  gmail
  zip
  city
  state
  country
  volunteer
  company
  title


  constructor(private data:DataService) {
    this.userDataService = this.data.profile.subscribe( profileData => {
      
      this.fields = [
        this.fName = new Field ("", new Cache("First Name",profileData.firstName)),
        this.lName = new Field ("", new Cache("Last Name",profileData.lastName)),
        this.age = new Field ("e.g. 30", new Cache("Age", "")),
        this.volunteer = new Field ("    ", new Cache("Have you volunteered in K-12 public schools in the past six months?","")),
        this.phoneNum = new Field ("e.g. 123 456 7890", new Cache("Phone Number","")),
        this.mailAddr = new Field ("Street, Apt #, City, State, Zip", new Cache("Mailing Address","")),
        this.email = new Field ("      ", new Cache("Email","")),
        this.gmail = new Field ("      ", new Cache("Gmail Contact","")),
      ]
      this.fields2 = [
        this.zip = new Field ("      ", new Cache("Zip Code","")),
        this.city = new Field ("      ", new Cache("City","")),
        this.state = new Field ("      ", new Cache("State","")),
        this.country = new Field ("      ", new Cache("Country","")),
        this.education = new Field ("    ", new Cache("Please list any schools you attended & degrees earned (middle school, high school, college, grad school)","")),
        this.industry = new Field ("e.g. health", new Cache("Industry",profileData.industry)),
        this.company = new Field ("", new Cache("Please name your company or organization",profileData.position)),
        this.title = new Field ("      ", new Cache("Please list your title",profileData.headline.split('at')[0])),


      ]

      this.data.emitFormRatio(this.getAnsRatio())


    })
    this.data.getProfile()





  }

  ngOnInit() {

  }

  getAnsRatio(){
    var answered = 0
    var notAnswered = 0
    this.fields.forEach(field => {        
      if (field.cache.color == "#38a3a5") answered += 1
      else notAnswered += 1
    });
    this.fields2.forEach(field => {
      if (field.cache.color == "#38a3a5") answered += 1
      else notAnswered += 1
    });
    this.answered = Math.floor(answered / (answered+notAnswered) * 100 )
    return this.answered
  }

  edit_written(event, field:Field, action){ 
    event.target.blur()  
    var value = event.target.value
    if (value != ""){
      field.value = value
      field.hint = value
      field.cache.value = value
      field.color = field.cache.colorGood
    }
    else if (action == "enter") {
      field.hint = field.cache.hint
      field.placeholder = field.cache.placeholder
      field.cache.value = field.cache.default
      field.value = field.cache.default
      if (field.cache.default == "") field.color = field.cache.colorBad
      else field.color = field.cache.colorGood
    }
    else {
      field.value = field.cache.value
      field.placeholder = field.cache.placeholder
    }
    field.title = field.cache.title
    field.placeholder = field.placeholder
  }
  edit_clicked(field:Field){
    field.value = ""
    field.placeholder = field.hint
  }
  edit_size(event, field:Field){
    var newValue = event.target.value
    if ( (field.io.width(newValue) > field.width) ) field.width = field.io.width(newValue)
    if ( (field.io.width(newValue) < field.width) && (field.io.width(newValue) > field.cache.width()) ){
      field.width = field.io.width(newValue)
    }
  }




  setGender(type){ return type == this.gender }
  setRace(type){ return type == this.race }


}
