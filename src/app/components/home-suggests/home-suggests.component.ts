import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { Router } from '@angular/router'
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'
import {ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BucketService } from '../../services/bucket.service'
import { DataType } from '../../support-ts/dataTypes'


@Component({
  selector: 'app-home-suggests',
  templateUrl: './home-suggests.component.html',
  styleUrls: ['./home-suggests.component.scss'],
  animations: [
    trigger('listStagger',[
      transition('* <=> *', [
        query(':enter', [
          style({ opacity:0, transform:'translateY(-15px)'}),
          stagger('50ms',
          animate('500ms ease-out',
          style({opacity:1, transform:'translateY(0px)'})))
        ], {optional : true}),
        query(':leave',animate('50ms ease-out',style({opacity:0,})), {optional : true})
      ])

    ])
  ]
})
export class HomeSuggestsComponent implements OnInit, AfterViewInit {

  marginLeft
  currentProfileId;

  profiles
  suggestedCount:Number = 0
  showLoadIcon = false
  @ViewChild('moreUsersId') moreUsersId: ElementRef;

  constructor(private data: DataService,
              public router:Router,
              private bucket:BucketService) { }

  ngOnInit() {
    this.data.users.subscribe( profilesData => {      
      this.suggestedCount = profilesData.length
      this.profiles = profilesData
      this.currentProfileId = profilesData[0].id    
      this.data.profilesData.next(profilesData[0])  
    })
    this.bucket.clientMonitor.subscribe( data => this.marginLeft = (data as DataType.clientMonitor).marginLeft )
    this.data.getUsers()
    this.bucket.loadIcon.subscribe(data => this.showLoadIcon = data as boolean)
  }
  ngAfterViewInit() {
    // this.moreUsersId.nativeElement.focus();
 }
  // showProfiles(userId){
  //   this.router.navigate(['profile/'+userId])
  // }
  selectProfile(profile){
    this.currentProfileId = profile.id
    this.data.profilesData.next(profile)
  }

  resetPicUrl(userId){    
    this.data.resetPicUrl(userId)
  }

  getMarginLeft(){
    if (this.marginLeft >= 5) return this.marginLeft-10
    return 5
  }

  ifCurrent(profile, style){
    if (style == "border-left" && profile.id == this.currentProfileId) return "4px solid #aaa"
    if (style == "pic-margin-left" && profile.id == this.currentProfileId) return "-9px"
    if (style == "name-margin-left" && profile.id == this.currentProfileId) return "50px"
    if (style == "title-margin-left" && profile.id == this.currentProfileId) return "50px"
    if (style == "background-color" && profile.id == this.currentProfileId) return "rgb(245, 245, 245)"
  }

}
