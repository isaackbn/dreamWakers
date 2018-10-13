import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSpeakerInputsComponent } from './settings-speaker-inputs.component';

describe('SettingsSpeakerInputsComponent', () => {
  let component: SettingsSpeakerInputsComponent;
  let fixture: ComponentFixture<SettingsSpeakerInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSpeakerInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSpeakerInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
