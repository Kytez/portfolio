import { Component } from '@angular/core';
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public translateService: TranslateService) {};

}
