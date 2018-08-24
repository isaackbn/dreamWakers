import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRedirectedComponent } from './auth-redirected.component';

describe('AuthRedirectedComponent', () => {
  let component: AuthRedirectedComponent;
  let fixture: ComponentFixture<AuthRedirectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRedirectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRedirectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
