import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { PortfolioProjectMirroredComponent } from './portfolio-project-mirrored/portfolio-project-mirrored.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    PortfolioProjectComponent,
    PortfolioProjectMirroredComponent,
    CommonModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      image: '../../../../assets/img/portfolio_screenshots/join.png',
      name: 'Join',
      techStack: 'JavaScript | CSS | HTML | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      githubUrl: 'https://github.com/Kytez/join139',
      liveTestUrl: 'https://marcel-luwinski.developerakademie.net/join/index.html',
    },
    {
      image: '../../../../assets/img/portfolio_screenshots/pollo_loco.png',
      name: 'El Pollo Loco',
      techStack: 'JavaScript | CSS | HTML',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      githubUrl: 'https://github.com/Kytez/elpolloloco',
      liveTestUrl: 'https://marcel-luwinski.developerakademie.net/pollo_loco/index.html',
    },
  ];

  observer: IntersectionObserver | undefined;
  intervalId: any;
  @ViewChild('arrowImgPortfolio') arrowImgPortfolio: ElementRef;

  ngAfterViewInit(): void {
    if (this.arrowImgPortfolio.nativeElement) {
      this.observer = new IntersectionObserver(
        this.handleIntersect.bind(this),
        {
          rootMargin: '0px 0px -200px 0px',
          threshold: 1.0,
        }
      );
      this.observer.observe(this.arrowImgPortfolio.nativeElement);
    }
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
