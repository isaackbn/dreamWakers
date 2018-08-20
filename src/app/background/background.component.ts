import { Component, OnInit } from '@angular/core';
import { element } from '../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  url = "https://www.dreamwakers.org/wp-content/uploads/2017/06/WebsiteMontageThickLine.mp4"
  pauseOrPlay = function(ele){
    var video = ele.srcElement;
     video[0].pause(); // video.play()
}
  constructor() { }

  ngOnInit() {
  }

}
