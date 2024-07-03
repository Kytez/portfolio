import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {

  images = [
    '../../../../assets/img/arrow_right/arrow_right_1.png',
    '../../../../assets/img/arrow_right/arrow_right_2.png',
    '../../../../assets/img/arrow_right/arrow_right_3.png'
  ];

  currentImage = this.images[0];
  imageIndex = 0;
  observer: IntersectionObserver | undefined;
  intervalId: any;
  @ViewChild('arrowImageSkills') arrowImageSkills: ElementRef;

  ngAfterViewInit(): void {
    if (this.arrowImageSkills.nativeElement) {
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
        rootMargin: '0px 0px -200px 0px',
        threshold: 1.0
      });
      this.observer.observe(this.arrowImageSkills.nativeElement);
    }
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
