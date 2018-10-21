import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile = null;

  constructor(private data:DataService) { 
    //this.route.params.subscribe(params => this.userId = params.id) 
    this.data.user.subscribe( userData => this.profile = userData )
    this.data.profilesData.subscribe(data => this.profile = data)
  }

  ngOnInit() {}



  hasData(){
    return this.profile != null
  }

}
