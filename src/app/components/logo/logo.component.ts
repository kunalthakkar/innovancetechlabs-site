import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClass">
      <div class="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <!-- Optional external glowing aura -->
        <div class="absolute inset-0 bg-cyan-500/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="overflow-visible relative z-10">
          <defs>
            <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#22d3ee" />
              <stop offset="100%" stop-color="#0891b2" />
            </linearGradient>
            <linearGradient id="neonPurple" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#c084fc" />
              <stop offset="100%" stop-color="#9333ea" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Abstract Tech Logo / Neural Network Node Concept -->
          <!-- Outer hexagon representing 'Advancement' and structure -->
          <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" stroke="url(#neonPurple)" stroke-width="2" fill="none" filter="url(#glow)" stroke-opacity="0.6" class="animate-pulse"/>
          
          <!-- Inner intersecting loops representing 'Innovation' and AI -->
          <path d="M 30 50 C 30 20, 70 80, 70 50" stroke="url(#neonCyan)" stroke-width="6" stroke-linecap="round" filter="url(#glow)"/>
          <path d="M 70 50 C 70 20, 30 80, 30 50" stroke="url(#neonPurple)" stroke-width="6" stroke-linecap="round" filter="url(#glow)"/>
          
          <!-- Central Node representing 'Core Intelligence' -->
          <circle cx="50" cy="50" r="8" fill="url(#neonCyan)" filter="url(#glow)"/>
          
          <!-- Small data nodes along the paths -->
          <circle cx="30" cy="50" r="4" fill="url(#neonPurple)"/>
          <circle cx="70" cy="50" r="4" fill="url(#neonCyan)"/>
          <circle cx="50" cy="25" r="3" fill="#ffffff" opacity="0.8"/>
          <circle cx="50" cy="75" r="3" fill="#ffffff" opacity="0.8"/>
        </svg>
      </div>
      <div *ngIf="showText" class="flex flex-col justify-center select-none" [class]="textClass">
        <span class="font-space font-bold tracking-tight leading-none text-white group-hover:text-cyan-50 transition-colors duration-300" [ngClass]="brandTextClass">
          Innovance <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TechLabs</span>
        </span>
        <span *ngIf="showSlogan" class="font-poppins text-gray-400 font-light uppercase tracking-widest mt-1.5 opacity-80" [ngClass]="sloganTextClass">
          Where Innovation Meets Advancement
        </span>
      </div>
    </div>
  `,
  styles: []
})
export class LogoComponent {
  @Input() size: number = 40;
  @Input() showText: boolean = true;
  @Input() showSlogan: boolean = false;
  @Input() layout: 'row' | 'column' = 'row';
  @Input() textScale: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  get containerClass(): string {
    const base = 'flex items-center cursor-pointer group ';
    if (this.layout === 'column') {
      return base + 'flex-col gap-4 text-center';
    }
    return base + 'gap-3';
  }

  get textClass(): string {
    if (this.layout === 'column') return 'items-center';
    return 'items-start';
  }

  get brandTextClass(): string {
    switch(this.textScale) {
      case 'sm': return 'text-lg';
      case 'md': return 'text-xl md:text-2xl';
      case 'lg': return 'text-2xl md:text-3xl';
      case 'xl': return 'text-4xl md:text-5xl mb-2';
      default: return 'text-xl';
    }
  }

  get sloganTextClass(): string {
    switch(this.textScale) {
      case 'sm': return 'text-[0.5rem]';
      case 'md': return 'text-[0.6rem] md:text-xs';
      case 'lg': return 'text-xs md:text-sm';
      case 'xl': return 'text-sm md:text-base';
      default: return 'text-xs';
    }
  }
}
