import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUPComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'dashboard',
                component: AdminDashboardComponent
            },
            {
                path:'layout',
                component:LayoutComponent
            }
            //   { path: 'users', component:  }, // if created
        ]
    },
    { path: 'signUP', component: SignUPComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'user-profile', component: UserProfileComponent },

];
