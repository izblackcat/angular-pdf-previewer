import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPdfPreviewerComponent } from './ngx-pdf-previewer.component';

describe('NgxPdfPreviewerComponent', () => {
  let component: NgxPdfPreviewerComponent;
  let fixture: ComponentFixture<NgxPdfPreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPdfPreviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPdfPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
