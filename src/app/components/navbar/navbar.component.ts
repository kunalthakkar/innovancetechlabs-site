import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ArrowRight, Menu, X } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  readonly ArrowRightIcon = ArrowRight;
  readonly MenuIcon = Menu;
  readonly XIcon = X;

  navLinks = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Services', path: '/services', exact: false },
    { label: 'Training', path: '/training', exact: false },
    { label: 'Projects', path: '/projects', exact: false },
    { label: 'About Us', path: '/about', exact: false }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 12;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
