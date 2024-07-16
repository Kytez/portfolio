import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NavMenuComponent,
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  language = '';

  animating = false;
  menuOpen = false;

  constructor(private translateService: TranslateService) {
    this.language = localStorage.getItem('language') || 'en';
  }

  toggleMenuAndAnimateIcon() {
    if (this.animating) return;
    this.animating = true;
    this.toggleMenu();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setLanguage(language: string) {
    this.language = language;

    localStorage.setItem('language', this.language);

    this.translateService.use(language);
  }
}

