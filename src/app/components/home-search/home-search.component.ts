import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataService} from '../../services/data.service'
import { Router } from '@angular/router'
import { BucketService } from '../../services/bucket.service'
import { DataType} from '../../support-ts/dataTypes'



@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  showSearchRes = false
  monitorData:DataType.clientMonitor
  profiles;

  searchSpeakerData_obs;
  showField_obs
  monitor_obs

  @ViewChild('container') container:ElementRef;


  constructor(private data: DataService,
              public router:Router,
              public bucket:BucketService) { }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (typeof this.container != "undefined"){
      if(this.container.nativeElement.contains(event.target)) {}//clicked inside
      else this.bucket.search.showRes.next(false)
    }
  }

  ngOnInit() {
    this.searchSpeakerData_obs = this.data.speakers.subscribe(speakersData => {      
      if(JSON.stringify(this.profiles) != JSON.stringify(speakersData)) this.profiles = speakersData        
    })
    this.showField_obs= this.bucket.search.showRes.subscribe( data => this.showSearchRes = (data as boolean))
    this.monitor_obs = this.bucket.clientMonitor.subscribe( data => this.monitorData = (data as DataType.clientMonitor))
  }


  getMarginLeft(){
    if (this.monitorData.marginLeft >= 5) return (this.monitorData.marginLeft - 20)+"px"
    return 4 + "px"
  }

  showProfiles(userId){
    //this.router.navigate(['profile/'+userId])
  }



  ngOnDestroy(){
    this.searchSpeakerData_obs.unsubscribe()
    this.showField_obs.unsubscribe()
    this.monitor_obs.unsubscribe()
  }
}
