import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPreviewerComponent } from './pdf-previewer.component';
import { loadPdfDocument } from '../utils/pdf-viewer-utils';
import { PDFDocumentProxy } from 'pdfjs-dist';

describe('PdfViewerComponent', () => {
  let component: PdfPreviewerComponent;
  let fixture: ComponentFixture<PdfPreviewerComponent>;
  let loadPdfDocumentSpy: jasmine.Spy;
  let mockPdfDoc : PDFDocumentProxy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfPreviewerComponent],
      providers: [
        { provide: loadPdfDocument, useValue: jasmine.createSpyObj('loadPdfDocument', ['loadPdfDocument']) },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PdfPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockPdfDoc = {
      numPages: 5,
      getPage: jasmine.createSpy('getPage').and.returnValue(Promise.resolve({})),  // Mock getPage() method
      // Add any other methods required from the PDFDocumentProxy interface.
    } as unknown as PDFDocumentProxy;

    loadPdfDocumentSpy = spyOn({ loadPdfDocument }, 'loadPdfDocument').and.returnValue(Promise.resolve(mockPdfDoc));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial zoom level set to 1.5', () => {
    expect(component.zoom).toBe(1.5);
  });

  it('should load pdf with valid src provided', async () => {
    component.src = 'assets/file.pdf';
    fixture.detectChanges();

    await fixture.whenStable();

    expect(loadPdfDocumentSpy).toHaveBeenCalledWith('assets/file.pdf');
    expect(component.pdfDoc).toBe(mockPdfDoc);
  });

  // it('should handle missing or invalid src field', () => {

  // })

});
