import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-filter-form',
  templateUrl: './speaker-filter-form.component.html',
  styleUrls: ['./speaker-filter-form.component.scss']
})
export class SpeakerFilterFormComponent implements OnInit {

  submitted = false;
  colleges = ["","Bowdoin", "Colby"]
  industries = ["","Computer Software", "Education", "E-Learning"]


  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
