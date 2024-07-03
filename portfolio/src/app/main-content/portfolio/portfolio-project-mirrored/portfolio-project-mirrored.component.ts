import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-project-mirrored',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-project-mirrored.component.html',
  styleUrl: './portfolio-project-mirrored.component.scss'
})
export class PortfolioProjectMirroredComponent {

  @Input() projectImg = '';
  @Input() projectName = '';
  @Input() projectTechStack = '';
  @Input() projectDescription = '';
  @Input() projectCount = '';
  @Input() projectTotal: number;
}
