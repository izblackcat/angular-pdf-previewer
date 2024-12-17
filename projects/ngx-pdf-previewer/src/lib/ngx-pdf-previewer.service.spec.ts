import { TestBed } from '@angular/core/testing';

import { NgxPdfPreviewerService } from './ngx-pdf-previewer.service';

describe('NgxPdfPreviewerService', () => {
  let service: NgxPdfPreviewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPdfPreviewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
