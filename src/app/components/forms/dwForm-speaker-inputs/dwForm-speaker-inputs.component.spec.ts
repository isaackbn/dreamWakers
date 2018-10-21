import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwFormSpeakerInputsComponent } from './dwForm-speaker-inputs.component';

describe('SettingsSpeakerInputsComponent', () => {
  let component: DwFormSpeakerInputsComponent;
  let fixture: ComponentFixture<DwFormSpeakerInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwFormSpeakerInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwFormSpeakerInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
