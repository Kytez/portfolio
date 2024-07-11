import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {

  images = [
    '../../../../assets/img/arrow_left/arrow_left_1.png',
    '../../../../assets/img/arrow_left/arrow_left_2.png',
    '../../../../assets/img/arrow_left/arrow_left_3.png'
  ];

  currentImage = this.images[0];
  imageIndex = 0;
  observer: IntersectionObserver | undefined;
  intervalId: any;

  @ViewChild('arrowImg') arrowImg: ElementRef;
  @ViewChild('imgFrame') imgFrame: ElementRef;

  ngAfterViewInit(): void {
    if (this.imgFrame.nativeElement && window.innerWidth < 992) {
      this.observer = new IntersectionObserver(this.handleIntersectImgFrame.bind(this), {
        rootMargin: '0px 0px -200px 0px',
        threshold: 0.5
      });
      this.observer.observe(this.imgFrame.nativeElement);
    }
    if (this.arrowImg.nativeElement && window.innerWidth < 992) {
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
        rootMargin: '0px 0px -200px 0px',
        threshold: 1.0
      });
      this.observer.observe(this.arrowImg.nativeElement);
    }
  }

  handleIntersectImgFrame(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('responsiveEffect');
        if (this.observer) {
          this.observer.unobserve(entry.target);
        }
      }
    });
  }

  handleIntersect(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateArrow();
        if (this.observer) {
          this.observer.unobserve(entry.target);
        }
      }
    });
  }

  animateArrow() {
    this.intervalId = setInterval(() => {
      if (this.imageIndex < this.images.length - 1) {
        this.imageIndex++;
      } else {
        clearInterval(this.intervalId);
      }
      this.currentImage = this.images[this.imageIndex];
    }, 80);
  }

}
