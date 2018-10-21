import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  marginLeft

  notifNum=0;
 

  constructor(private data: DataService) {
    this.data.screenData.subscribe( data => this.marginLeft = data.marginLeft )
    this.data.profile.subscribe( data => {if (data.notifications!= null) this.notifNum = data.notifications})
   }

  ngOnInit() {     
    this.data.reqScreenData()
  }


  getMarginLeft(){
    if (this.marginLeft >= 5) return this.marginLeft+250-40
    return 250 - 25
  }



}
