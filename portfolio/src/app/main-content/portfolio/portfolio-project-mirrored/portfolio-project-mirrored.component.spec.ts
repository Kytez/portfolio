import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectMirroredComponent } from './portfolio-project-mirrored.component';

describe('PortfolioProjectMirroredComponent', () => {
  let component: PortfolioProjectMirroredComponent;
  let fixture: ComponentFixture<PortfolioProjectMirroredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProjectMirroredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioProjectMirroredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
