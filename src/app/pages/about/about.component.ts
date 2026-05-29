import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle,
  CloudCog,
  Code,
  Cpu,
  Eye,
  Globe,
  Handshake,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap
} from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly BrainCircuitIcon = BrainCircuit;
  readonly CheckCircleIcon = CheckCircle;
  readonly CloudCogIcon = CloudCog;
  readonly CodeIcon = Code;
  readonly CpuIcon = Cpu;
  readonly EyeIcon = Eye;
  readonly GlobeIcon = Globe;
  readonly HandshakeIcon = Handshake;
  readonly LayersIcon = Layers;
  readonly RocketIcon = Rocket;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly SparklesIcon = Sparkles;
  readonly TargetIcon = Target;
  readonly UsersIcon = Users;
  readonly ZapIcon = Zap;

  stats = [
    { value: '50+', label: 'Products, platforms, and digital experiences delivered' },
    { value: '8', label: 'Core service lines across software, cloud, AI, QA, and training' },
    { value: '24/7', label: 'Support mindset for launches, production systems, and teams' }
  ];

  values = [
    {
      title: 'Clarity',
      desc: 'We simplify ambiguous technology decisions into a practical roadmap your team can trust.',
      icon: Eye
    },
    {
      title: 'Engineering Depth',
      desc: 'Architecture, security, performance, and maintainability guide every product decision.',
      icon: Cpu
    },
    {
      title: 'Measurable Impact',
      desc: 'Every sprint is tied to user outcomes, business goals, or operational improvement.',
      icon: Target
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We build with ownership, document decisions, and stay close after launch.',
      icon: Handshake
    }
  ];

  operatingPrinciples = [
    'Product thinking before implementation',
    'Cloud-ready and security-aware by default',
    'Fast prototypes with a clear path to production',
    'Transparent communication and practical documentation',
    'Training and handover built into delivery'
  ];

  capabilities = [
    'Custom enterprise software',
    'Modern web and mobile platforms',
    'Cloud architecture and DevOps',
    'AI automation and intelligent workflows',
    'Dashboards, analytics, and data products',
    'Testing, QA, and release readiness'
  ];

  industries = [
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Education',
    'Logistics',
    'Real Estate',
    'Professional Services'
  ];
}
