import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
import { Observable} from 'rxjs'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-flashchats',
  templateUrl: './flashchats.component.html',
  styleUrls: ['./flashchats.component.scss']
})
export class FlashchatsComponent implements OnInit {

  posts: Object
  url = "https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4"

  constructor(private data:DataService) {}

  ngOnInit() {
  }

}
