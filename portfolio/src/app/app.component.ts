import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'portfolio';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('language') || 'en');
  }


}
