import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  @Output() closeNavMenu: EventEmitter<void> = new EventEmitter<void>();

  triggerCloseNavMenu() {
    this.closeNavMenu.emit();
  }

}
