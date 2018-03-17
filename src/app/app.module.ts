import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http, HttpModule, Response, RequestOptions, Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PdfService } from './services/pdf.service';

const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PdfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
