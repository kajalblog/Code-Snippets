import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../../modal/menu.interface';
import { Menu_Items } from '../../constant/constant';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 @Input() isSidebarVisible = true;
  @Input() isMobile = false;
  @Output() close = new EventEmitter<void>();
 closeSidebar() {
    this.close.emit();
  }
  menuItems:MenuItem[]=Menu_Items;
}
