import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.scss']
})
export class HomeCalendarComponent implements OnInit {


  eventNumber = 0
  videoUrl = "https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4"

  constructor() { }

  ngOnInit() {
  }

}
