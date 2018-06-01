import { Component, OnInit } from '@angular/core';
import { PdfService } from '../services/pdf.service';
import { HomeMenuItem } from './home-menu-item/home-menu-item.model';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css', './home.component.scss']
})
class HomeComponent implements OnInit {
    public menuItems: HomeMenuItem[];

    constructor(private pdfService: PdfService) {}

    generateRandomPdf() {
        this.pdfService.generatePdf();
    }

    ngOnInit() {
        this.menuItems = [
            new HomeMenuItem('btn-primary', 'generateRandomPdf()', 'fas fa-file-pdf', 'Get Random PDF', true),
            new HomeMenuItem('btn-primary', 'generateRandomPdf()', 'fas fa-file-pdf', 'Get Random PDF', true),

        ];
    }
}

export { HomeComponent };
