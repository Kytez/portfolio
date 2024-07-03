import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
})
export class PortfolioProjectComponent {
  
  @Input() projectImg = '';
  @Input() projectName = '';
  @Input() projectTechStack = '';
  @Input() projectDescription = '';
  @Input() projectCount = '';
  @Input() projectTotal: number;
}
