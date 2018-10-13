import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTeacherInputsComponent } from './settings-teacher-inputs.component';

describe('SettingsTeacherInputsComponent', () => {
  let component: SettingsTeacherInputsComponent;
  let fixture: ComponentFixture<SettingsTeacherInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTeacherInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTeacherInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
