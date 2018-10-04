import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {


  eventNumber = 0
  videoUrl = "https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4"

  constructor() { }

  ngOnInit() {
  }

}
