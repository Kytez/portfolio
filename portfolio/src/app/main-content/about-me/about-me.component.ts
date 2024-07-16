import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements AfterViewInit {
  observer: IntersectionObserver | undefined;
  intervalId: any;

  @ViewChild('arrowImg') arrowImg: ElementRef;
  @ViewChild('imgFrame') imgFrame: ElementRef;

  constructor(private translateService: TranslateService) {};

  ngAfterViewInit(): void {
    if (this.imgFrame.nativeElement && window.innerWidth < 992) {
      this.observer = new IntersectionObserver(
        this.handleIntersectImgFrame.bind(this),
        {
          rootMargin: '0px 0px -200px 0px',
          threshold: 0.5,
        }
      );
      this.observer.observe(this.imgFrame.nativeElement);
    }
    if (this.arrowImg.nativeElement) {
      this.observer = new IntersectionObserver(
        this.handleIntersect.bind(this),
        {
          rootMargin: '0px 0px -200px 0px',
          threshold: 1.0,
        }
      );
      this.observer.observe(this.arrowImg.nativeElement);
    }
  }

  handleIntersectImgFrame(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('responsiveEffect');
        if (this.observer) {
          this.observer.unobserve(entry.target);
        }
      }
    });
  }

  handleIntersect(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('animateArrow');
        setTimeout(() => {
          (entry.target as HTMLElement).classList.add('arrowFinalPosition');
        }, 250);
        if (this.observer) {
          this.observer.unobserve(entry.target);
        }
      }
    });
  }
}
