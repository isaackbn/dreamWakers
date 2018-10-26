import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { BucketService } from '../../services/bucket.service'
import { DataType } from '../../support-ts/dataTypes'

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  marginLeft

  notifNum = 0;
 

  constructor(private data: DataService,
              private bucket:BucketService) {
    this.bucket.clientMonitor.subscribe( data => this.marginLeft = (data as DataType.clientMonitor).marginLeft )
    this.data.profile.subscribe( data => {if (data.notifications!= null) this.notifNum = data.notifications})
   }

  ngOnInit() { }


  getMarginLeft(){
    if (this.marginLeft >= 5) return this.marginLeft+250-40
    return 250 - 25
  }



}
