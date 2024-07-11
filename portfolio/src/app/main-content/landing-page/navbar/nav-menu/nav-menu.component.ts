import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnChanges {

  @Output() closeNavMenu: EventEmitter<void> = new EventEmitter<void>();

  @Input() activate: boolean = false;
  isActive: boolean = false;

  triggerCloseNavMenu() {
    this.closeNavMenu.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activate']) {
      this.isActive = this.activate;
    }
  }

}
