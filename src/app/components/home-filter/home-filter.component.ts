import { Component, OnInit, ElementRef, HostListener, ViewChild  } from '@angular/core';
import { BucketService } from '../../services/bucket.service'


@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.scss']
})
export class HomeFilterComponent implements OnInit {
  @ViewChild('container') container:ElementRef;

  constructor(private bucket:BucketService) { }
  clickout(event) {
    if (typeof this.container != "undefined"){
      if(this.container.nativeElement.contains(event.target)) {}//clicked inside
      else this.bucket.filter.showfield.next(false)
    }
  }
  ngOnInit() {
  }

}
