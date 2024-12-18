import { Component, Input, OnInit } from '@angular/core';
import { loadPdfDocument } from '../utils/pdf-viewer-utils';

@Component({
  selector: 'pdf-previewer',
  standalone: true,
  imports: [],
  templateUrl: './pdf-previewer.component.html',
  styleUrl: './pdf-previewer.component.css'
})
export class PdfPreviewerComponent implements OnInit {
  @Input('src') src!: string;
  @Input('zoom') zoom: number = 1.5;

  currentPage = 1;
  totalPages = 1;
  private pdfDoc: any;

  async ngOnInit(): Promise<void> {
    if (!this.src) {
      console.error("PDF source not specified!");
      return;
    }

    this.pdfDoc = await loadPdfDocument(this.src);

    this.totalPages = this.pdfDoc.numPages;

    this.renderPage(this.currentPage);
  }

  renderPage(pageNumber: number) {
    this.pdfDoc.getPage(pageNumber).then((page: any) => {
      const canvas = document.getElementById('pdfCanvas') as HTMLCanvasElement;

      const context = canvas.getContext('2d');

      const viewport = page.getViewport({ scale: this.zoom });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({
        canvasContext: context,
        viewport: viewport
      })
    })
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
      this.currentPage ++;
      this.renderPage(this.currentPage);
    }
  }

  previousPage() {
    if(this.currentPage > 1) {
      this.currentPage --;
      this.renderPage(this.currentPage);
    }
  }

}
