import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { saveAs } from 'file-saver/FileSaver';

@Injectable()
export  class PdfService {
    constructor(private http: Http) {}

    generatePdf() {
        const url = 'http://heroku.randomfiles.io/api/rest/v1/pdf';

        this.http.get(url).subscribe(
            (response) => {
                const mediaType = 'application/pdf';
                const blob = new Blob([response], {type: mediaType});
                const filename = 'randomfiles.io.pdf';
                console.log(blob);
                console.log(response);
                saveAs(blob, filename);
            });
    }
}
