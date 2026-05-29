import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="containerClass">
      <svg
        [attr.width]="size"
        [attr.height]="size"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="itl-logo-mark"
        role="img"
        aria-label="InnovanceTechLabs logo mark"
      >
        <defs>
          <linearGradient id="itlLogoSurface" x1="8" y1="4" x2="58" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#e7ffff" stop-opacity="0.28" />
            <stop offset="0.42" stop-color="#0F172A" stop-opacity="0.95" />
            <stop offset="1" stop-color="#050816" />
          </linearGradient>
          <linearGradient id="itlLogoAccent" x1="14" y1="12" x2="54" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#00B7FF" />
            <stop offset="0.34" stop-color="#1E6BFF" />
            <stop offset="0.67" stop-color="#7A3CFF" />
            <stop offset="1" stop-color="#D946EF" />
          </linearGradient>
          <filter id="itlLogoGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="5" y="5" width="54" height="54" rx="14" fill="url(#itlLogoSurface)" stroke="rgba(255,255,255,0.22)" />
        <path d="M18 45V19" stroke="url(#itlLogoAccent)" stroke-width="5.4" stroke-linecap="round" filter="url(#itlLogoGlow)" />
        <path d="M26 45L45 26" stroke="url(#itlLogoAccent)" stroke-width="5.4" stroke-linecap="round" filter="url(#itlLogoGlow)" />
        <path d="M34 18H47V31" stroke="url(#itlLogoAccent)" stroke-width="5.4" stroke-linecap="round" stroke-linejoin="round" filter="url(#itlLogoGlow)" />
        <path d="M27 19H18" stroke="#eaffff" stroke-width="2.2" stroke-linecap="round" opacity="0.9" />
        <path d="M18 45H30" stroke="#eaffff" stroke-width="2.2" stroke-linecap="round" opacity="0.75" />
        <circle cx="18" cy="19" r="2.6" fill="#f8ffff" />
        <circle cx="45" cy="26" r="2.8" fill="#fef3c7" />
      </svg>

      <img class="itl-logo-img" src="images/logo-white.svg" alt="Innovance TechLabs logo" />

      <div *ngIf="showText" [class]="textClass">
        <div>
          <span class="itl-logo-wordmark">
            <span class="itl-brand" [ngClass]="brandTextClass">INNOVANCE</span>
            <span class="itl-subtitle">TECHLABS</span>
          </span>
        </div>
        <span *ngIf="showSlogan" class="itl-logo-slogan" [ngClass]="sloganTextClass">
          Where Innovation Meets Advancement
        </span>
      </div>
    </div>
  `,
  styles: []
})
export class LogoComponent {
  @Input() size = 42;
  @Input() showText = true;
  @Input() showSlogan = false;
  @Input() layout: 'row' | 'column' = 'row';
  @Input() textScale: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  get containerClass(): string {
    const base = 'itl-logo group ';
    return this.layout === 'column' ? `${base}itl-logo-column` : `${base}itl-logo-row`;
  }

  get textClass(): string {
    return this.layout === 'column' ? 'flex flex-col items-center' : 'flex flex-col items-start';
  }

  get brandTextClass(): string {
    switch (this.textScale) {
      case 'sm':
        return 'text-base';
      case 'lg':
        return 'text-2xl md:text-3xl';
      case 'xl':
        return 'text-4xl md:text-5xl';
      default:
        return 'text-xl md:text-2xl';
    }
  }

  get sloganTextClass(): string {
    switch (this.textScale) {
      case 'sm':
        return 'text-[0.58rem]';
      case 'lg':
        return 'text-xs md:text-sm';
      case 'xl':
        return 'text-sm md:text-base';
      default:
        return 'text-[0.66rem] md:text-xs';
    }
  }
}
