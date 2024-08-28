import { TestBed } from '@angular/core/testing';

import { NgxAaiUiKitService } from './ngx-aai-ui-kit.service';

describe('NgxAaiUiKitService', () => {
  let service: NgxAaiUiKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAaiUiKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
