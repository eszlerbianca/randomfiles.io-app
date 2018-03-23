import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';
import 'rxjs/add/operator/catch';

@Injectable()
export class PdfService {
    constructor(private http: HttpClient) { }

    generatePdf() {
        const url = 'http://heroku.randomfiles.io/api/rest/v1/pdf';

        this.http.get(url, {
            responseType: 'blob'
        }).subscribe(
            (response: Blob) => {
                const filename = 'randomfiles.io.pdf';
                saveAs(response, filename);
            });
    }
}
