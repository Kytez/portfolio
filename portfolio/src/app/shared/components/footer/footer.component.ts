import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, ContactFormComponent, TranslateModule, RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private translateService: TranslateService) {};

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
