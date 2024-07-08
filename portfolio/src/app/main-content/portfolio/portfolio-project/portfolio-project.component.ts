import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {

  // @ViewChild('onEntryText') onEntryText!: ElementRef;

  // private observer!: IntersectionObserver;
  
  @Input() projectImg = '';
  @Input() projectName = '';
  @Input() projectTechStack = '';
  @Input() projectDescription = '';
  @Input() projectGithubUrl = '';
  @Input() projectLiveTestUrl = '';
  @Input() projectCount = '';
  @Input() projectTotal: number;

  // ngAfterViewInit(): void {
  //   this.observer = new IntersectionObserver(this.addClass.bind(this), {
  //     rootMargin: '0px 0px -200px 0px',
  //     threshold: 0
  //   });
  //   this.observer.observe(this.onEntryText.nativeElement);
  // }

  // addClass(entries: IntersectionObserverEntry[]): void {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       (entry.target as HTMLElement).classList.add('makeVisible');
  //     }
  //   });
  // }
}


