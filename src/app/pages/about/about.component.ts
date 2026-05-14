import { Component, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Rocket,
  Users,
  Code,
  Cloud,
  BookOpen,
  Network,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Building2,
  GraduationCap
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  // Icons
  readonly TargetIcon = Target;
  readonly EyeIcon = Eye;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly ZapIcon = Zap;
  readonly RocketIcon = Rocket;
  readonly UsersIcon = Users;
  readonly CodeIcon = Code;
  readonly CloudIcon = Cloud;
  readonly BookOpenIcon = BookOpen;
  readonly NetworkIcon = Network;
  readonly MapPinIcon = MapPin;
  readonly PhoneIcon = Phone;
  readonly MailIcon = Mail;
  readonly LinkedinIcon = Linkedin;
  readonly TwitterIcon = Twitter;
  readonly GithubIcon = Github;
  readonly Building2Icon = Building2;
  readonly GraduationCapIcon = GraduationCap;

  // Animated stats
  animatedStats = [0, 0, 0, 0, 0, 0];

  // Technologies
  technologies = [
    { name: '.NET Core', level: 'Expert', icon: '⚡' },
    { name: 'Angular', level: 'Expert', icon: '🔴' },
    { name: 'React', level: 'Expert', icon: '⚛️' },
    { name: 'Azure', level: 'Expert', icon: '☁️' },
    { name: 'AWS', level: 'Expert', icon: '📦' },
    { name: 'Docker', level: 'Expert', icon: '🐳' },
    { name: 'Kubernetes', level: 'Expert', icon: '⚙️' },
    { name: 'AI/ML', level: 'Advanced', icon: '🤖' },
    { name: 'Power BI', level: 'Expert', icon: '📊' },
    { name: 'SQL Server', level: 'Expert', icon: '🗄️' },
    { name: 'PostgreSQL', level: 'Advanced', icon: '🐘' },
    { name: 'Node.js', level: 'Expert', icon: '🟢' }
  ];

  // Industries
  industries = [
    {
      name: 'Healthcare',
      icon: Zap,
      description: 'HIPAA-compliant solutions for patient management, telemedicine, and medical records systems.'
    },
    {
      name: 'Finance',
      icon: Zap,
      description: 'Secure fintech platforms, banking solutions, and compliance-ready financial systems.'
    },
    {
      name: 'Retail',
      icon: Zap,
      description: 'E-commerce platforms, inventory management, and omnichannel retail solutions.'
    },
    {
      name: 'Manufacturing',
      icon: Zap,
      description: 'IoT integration, supply chain optimization, and production management systems.'
    },
    {
      name: 'Logistics',
      icon: Zap,
      description: 'Real-time tracking, route optimization, and warehouse management platforms.'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Learning management systems, educational platforms, and student engagement tools.'
    },
    {
      name: 'Real Estate',
      icon: Building2,
      description: 'Property management systems, virtual tours, and real estate transaction platforms.'
    }
  ];

  constructor() {}

  ngOnInit() {
    // Animate stats on component load
    this.animateStats();
  }

  animateStats() {
    const targetValues = [15, 150, 98, 45, 50, 12];
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      this.animatedStats = targetValues.map(target => {
        return Math.floor(target * easeOut);
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        this.animatedStats = targetValues;
      }
    }, stepDuration);
  }
}
