import { Component, OnInit } from '@angular/core';
import { PdfService } from '../services/pdf.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', './home.component.scss']
})
class HomeComponent implements OnInit {
    constructor(private pdfService: PdfService) {}

    generateRandomPdf() {
        this.pdfService.generatePdf();
    }

    ngOnInit() {
    }
}

export { HomeComponent };
