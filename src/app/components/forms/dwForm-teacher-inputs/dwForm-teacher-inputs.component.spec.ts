import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwFormTeacherInputsComponent } from './dwForm-teacher-inputs.component';

describe('SettingsTeacherInputsComponent', () => {
  let component: DwFormTeacherInputsComponent;
  let fixture: ComponentFixture<DwFormTeacherInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwFormTeacherInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwFormTeacherInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
