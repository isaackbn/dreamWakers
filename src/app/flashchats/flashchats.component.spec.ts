import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashchatsComponent } from './flashchats.component';

describe('FlashchatsComponent', () => {
  let component: FlashchatsComponent;
  let fixture: ComponentFixture<FlashchatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashchatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
