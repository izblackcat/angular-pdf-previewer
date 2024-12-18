# NgxPdfPreviewer

As its name indicates, this is a library for viewing pdf files in Angular projects. 

## Getting started

For now, NgxPdfRreviewer can be installed using npm : 

```bash
npm install ngx-pdf-previewer
```

Then, it's simple to include it in your Angular components: 

1. Import the `PdfViewerComponent` in your component :

```ts
import { PdfViewerComponent } from 'ngx-pdf-previewer';
```

2. Add it to the `imports` array of your component: 

```ts
// ...
// import { PdfViewerComponent } from 'ngx-pdf-previewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerComponent],
  // templateUrl: ``
})
// ...
```
3. After that, in your component' HTML template use : 

```html
<lib-pdf-viewer src="assets/law.pdf" [zoom]="1"></lib-pdf-viewer>
```
The `src` specifies the path to your Pdf file with the `zoom` level. 
> Note that the `zoom` is a number and not a string.


