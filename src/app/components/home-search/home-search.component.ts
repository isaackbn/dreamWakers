import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  speakers;
  observer;

  constructor(private data: DataService, public router:Router) { }

  ngOnInit() {
    this.observer = this.data.speakers.subscribe(speakersData => {      
      if(JSON.stringify(this.speakers) != JSON.stringify(speakersData)) this.speakers = speakersData           
    })

  }



  showDetails(userId){
    this.router.navigate(['details/'+userId])
  }



  ngOnDestroy(){
    this.observer.unsubscribe()
  }
}
