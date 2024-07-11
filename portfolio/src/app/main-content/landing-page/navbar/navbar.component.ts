import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  animating = false;
  menuOpen = false;

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
}