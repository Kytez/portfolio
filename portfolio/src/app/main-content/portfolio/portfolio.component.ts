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
      githubUrl: '',
      liveTestUrl: '',
    },
    {
      image: '../../../../assets/img/portfolio_screenshots/pollo_loco.png',
      name: 'El Pollo Loco',
      techStack: 'JavaScript | CSS | HTML',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      githubUrl: '',
      liveTestUrl: '',
    },
    // {
    //   image: '../../../../assets/img/portfolio_screenshots/webdev_luwinski.png',
    //   name: 'Webdevelopment Luwinski',
    //   techStack: 'JavaScript | CSS | HTML',
    //   description:
    //     'Business Website for my inactive side hustle.',
    // }
  ];

  images = [
    '../../../../assets/img/arrow_left/arrow_left_1.png',
    '../../../../assets/img/arrow_left/arrow_left_2.png',
    '../../../../assets/img/arrow_left/arrow_left_3.png',
  ];

  currentImage = this.images[0];
  imageIndex = 0;
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
