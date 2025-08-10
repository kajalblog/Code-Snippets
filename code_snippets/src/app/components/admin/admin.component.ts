import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [SidebarComponent,NavbarComponent,RouterOutlet,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  screenWidth = window.innerWidth;
   isSidebarVisible = true;
sidebarWidth = 300; 
 isMobile = false;
 
  constructor()
  {
    //  window.addEventListener('resize', () => {
    //   this.screenWidth = window.innerWidth;
    // });
     this.updateScreenSize();
    window.addEventListener('resize', () => this.updateScreenSize());
  }
    updateScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  //  toggleSidebar() {
  //   this.isSidebarVisible = !this.isSidebarVisible;
  // }
}
