import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSuggestsComponent } from './home-suggests.component';

describe('HomeSuggestsComponent', () => {
  let component: HomeSuggestsComponent;
  let fixture: ComponentFixture<HomeSuggestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSuggestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSuggestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
