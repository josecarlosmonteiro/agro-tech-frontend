import { TestBed } from '@angular/core/testing';

import { AreaNotificationService } from './area-notification.service';

describe('AreaNotificationService', () => {
  let service: AreaNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
