import { TestBed, inject } from '@angular/core/testing';

import { LinkedinLoginService } from './linkedin-login.service';

describe('LinkedinLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkedinLoginService]
    });
  });

  it('should be created', inject([LinkedinLoginService], (service: LinkedinLoginService) => {
    expect(service).toBeTruthy();
  }));
});
