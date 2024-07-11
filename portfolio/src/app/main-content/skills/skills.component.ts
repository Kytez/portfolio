import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {

  observer: IntersectionObserver | undefined;
  intervalId: any;
  @ViewChild('arrowImageSkills') arrowImageSkills: ElementRef;

  ngAfterViewInit(): void {
    if (this.arrowImageSkills.nativeElement) {
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
        rootMargin: '0px 0px -300px 0px',
        threshold: 0.5
      });
      this.observer.observe(this.arrowImageSkills.nativeElement);
    }
  }

  handleIntersect(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
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
