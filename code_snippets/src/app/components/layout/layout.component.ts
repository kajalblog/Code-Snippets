import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [FormsModule,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
cards = [
  { title: 'Users', description: 'Manage registered users' },
  { title: 'Vehicles', description: 'Track all service vehicles' },
  { title: 'Bookings', description: 'Handle service appointments' },
  { title: 'Reports', description: 'View analytics and reports' }
];

}
