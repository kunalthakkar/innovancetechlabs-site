import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ArrowRight, Menu, X, Sun, Moon } from 'lucide-angular';
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
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;

  isLightTheme = false;

  navLinks = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about', exact: false },
    { label: 'Services', path: '/services', exact: false },
    { label: 'Training', path: '/training', exact: false },
    { label: 'Projects', path: '/projects', exact: false }
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

  ngOnInit(): void {
    const theme = localStorage.getItem('site-theme');
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      this.isLightTheme = true;
    } else if (theme === 'dark') {
      document.body.classList.remove('light-theme');
      this.isLightTheme = false;
    } else {
      // fallback to prefers-color-scheme
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      if (prefersLight) {
        document.body.classList.add('light-theme');
        this.isLightTheme = true;
      }
    }
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    if (this.isLightTheme) {
      document.body.classList.add('light-theme');
      localStorage.setItem('site-theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('site-theme', 'dark');
    }
  }
}
