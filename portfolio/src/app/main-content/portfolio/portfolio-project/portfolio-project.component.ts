import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {

  observer: IntersectionObserver | undefined;

  @ViewChild('imgContainer') imgContainer: ElementRef;
  @ViewChild('imgFrame') imgFrame: ElementRef;
  @ViewChild('circleArrow') circleArrow: ElementRef;
  @ViewChild('projectInfoText') projectInfoText: ElementRef;
  
  @Input() projectCount = '';
  @Input() projectTotal: number;
  @Input() project: any;

  constructor(public translateService: TranslateService) {};

  ngAfterViewInit(): void {
    if (this.imgContainer.nativeElement && window.innerWidth < 992) {
      this.observer = new IntersectionObserver(this.handleIntersectImgContainer.bind(this), {
        rootMargin: '0px 0px -200px 0px',
        threshold: 1.0
      });
      this.observer.observe(this.imgContainer.nativeElement);
    }
  }

  handleIntersectImgContainer(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.projectInfoText.nativeElement.classList.add('slideAnimation');
        (entry.target as HTMLElement).classList.add('responsiveImgColorEffect');
        this.imgFrame.nativeElement.classList.add('responsiveFrameEffect');
        this.circleArrow.nativeElement.classList.add('responsiveCircleArrowEffect');
        setTimeout(() => {
          this.projectInfoText.nativeElement.classList.add('responsiveTextSlideEffect');
        }, 400);
        if (this.observer) {
          this.observer.unobserve(entry.target);
        }
      }
    });
  }
}


