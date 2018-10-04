import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.scss']
})
export class SpeakerFormComponent implements OnInit {

  submitted = false;
  colleges = ["","Bowdoin", "Colby"]
  industries = ["","Computer Software", "Education", "E-Learning"]


  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
