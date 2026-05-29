import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly PhoneIcon = Phone;
  readonly TwitterIcon = Twitter;

  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Training', path: '/training' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  services = [
    'Custom Software Development',
    'Web & Mobile Development',
    'Cloud Solutions',
    'AI & Automation',
    'Dashboard & Analytics',
    'Testing & QA'
  ];
}
