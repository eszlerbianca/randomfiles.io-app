import { Component } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import { faFilePdf } from '@fortawesome/fontawesome-free-solid';
import { faQuestionCircle } from '@fortawesome/fontawesome-free-regular';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(faFilePdf, faQuestionCircle, faLinkedin, faGithub);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'app.component.scss']
})
export class AppComponent {
  title = 'Generate random files';
}
