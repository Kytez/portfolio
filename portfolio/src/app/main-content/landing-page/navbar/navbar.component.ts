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
  images = [
    '../../../../assets/img/icons/burger_menu/burger_1.png',
    '../../../../assets/img/icons/burger_menu/burger_2.png',
    '../../../../assets/img/icons/burger_menu/burger_3.png',
    '../../../../assets/img/icons/burger_menu/burger_4.png',
    '../../../../assets/img/icons/burger_menu/burger_x.png',
  ];

  currentImage = this.images[0];
  imageIndex = 0;
  animating = false;
  menuOpen = false;

  toggleMenuAndAnimateIcon() {
    if (this.animating) return;
    this.animating = true;
    this.animateImages(this.imageIndex === 0);
    this.toggleMenu();
  }

  animateImages(imgState: boolean) {
    let step = 0;
    const interval = setInterval(() => {
      if (step < this.images.length - 1) {
        this.imageIndex = imgState ? this.imageIndex + 1 : this.imageIndex - 1;
        this.currentImage = this.images[this.imageIndex];
        step++;
      } else {
        clearInterval(interval);
        this.animating = false;
      }
    }, 40);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.animateImages(this.imageIndex === 0);
  }
}