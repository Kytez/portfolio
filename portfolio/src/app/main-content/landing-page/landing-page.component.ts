import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  images = [
    '../../../../assets/img/scroll_arrows/scroll_arrow_empty.png',
    '../../../../assets/img/scroll_arrows/scroll_arrow_1.png',
    '../../../../assets/img/scroll_arrows/scroll_arrow_2.png',
    '../../../../assets/img/scroll_arrows/scroll_arrow_3.png',
    '../../../../assets/img/scroll_arrows/scroll_arrow_4.png',
    '../../../../assets/img/scroll_arrows/scroll_arrow_5.png',
  ];

  currentImage = this.images[3];
  imageIndex = 0;

  constructor() {
    // this.animateArrow();
  }

  animateArrow() {
    setInterval(() => {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
        this.currentImage = this.images[this.imageIndex];
    }, 200);
}
}
