import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerFilterFormComponent } from './speaker-filter-form.component';

describe('SpeakerFormComponent', () => {
  let component: SpeakerFilterFormComponent;
  let fixture: ComponentFixture<SpeakerFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
