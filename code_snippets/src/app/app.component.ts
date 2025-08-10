import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomeComponent } from "./components/home/home.component";
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, UserProfileComponent, HomeComponent,ContactComponent,ProjectComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

}
