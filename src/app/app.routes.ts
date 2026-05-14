import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TrainingComponent } from './pages/training/training.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Innovance TechLabs | Home' },
  { path: 'about', component: AboutComponent, title: 'About Us | Innovance TechLabs' },
  { path: 'services', component: ServicesComponent, title: 'Services | Innovance TechLabs' },
  { path: 'training', component: TrainingComponent, title: 'Training | Innovance TechLabs' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects | Innovance TechLabs' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | Innovance TechLabs' },
  { path: '**', redirectTo: '' }
];
