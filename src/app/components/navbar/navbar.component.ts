import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X, Code, BrainCircuit } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly BrainCircuitIcon = BrainCircuit;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
