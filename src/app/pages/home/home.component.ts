import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle,
  CloudCog,
  Code,
  Cpu,
  Database,
  Gauge,
  Globe,
  Handshake,
  Layers,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap
} from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly BotIcon = Bot;
  readonly BrainCircuitIcon = BrainCircuit;
  readonly CheckCircleIcon = CheckCircle;
  readonly GaugeIcon = Gauge;
  readonly GlobeIcon = Globe;
  readonly HandshakeIcon = Handshake;
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly MessageCircleIcon = MessageCircle;
  readonly PhoneIcon = Phone;
  readonly RocketIcon = Rocket;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly SparklesIcon = Sparkles;
  readonly WorkflowIcon = Workflow;
  readonly ZapIcon = Zap;

  heroMetrics = [
    { value: '50+', label: 'Digital products shipped' },
    { value: '24/7', label: 'Cloud and support mindset' },
    { value: '8', label: 'Core engineering capabilities' }
  ];

  services = [
    {
      title: 'Custom Software Development',
      desc: 'Enterprise platforms, workflow systems, integrations, and secure architecture built around your business model.',
      icon: Code,
      tag: 'Architecture'
    },
    {
      title: 'Web Development',
      desc: 'High-performance websites, portals, SaaS frontends, and Angular experiences designed for conversion and scale.',
      icon: Globe,
      tag: 'Frontend'
    },
    {
      title: 'Mobile App Development',
      desc: 'Modern mobile apps with smooth journeys, reliable APIs, and release-ready product engineering.',
      icon: MonitorSmartphone,
      tag: 'iOS + Android'
    },
    {
      title: 'Cloud Solutions',
      desc: 'Cloud migration, DevOps, infrastructure automation, monitoring, and resilient deployment pipelines.',
      icon: CloudCog,
      tag: 'AWS + Azure'
    },
    {
      title: 'AI & Automation',
      desc: 'AI-assisted workflows, predictive systems, intelligent assistants, and automation that reduces operational drag.',
      icon: BrainCircuit,
      tag: 'Intelligence'
    },
    {
      title: 'Dashboard & Analytics',
      desc: 'Executive dashboards, Power BI experiences, live metrics, and decision systems connected to trusted data.',
      icon: Database,
      tag: 'Insights'
    },
    {
      title: 'Testing & QA',
      desc: 'Manual and automated quality practices that harden performance, usability, accessibility, and security.',
      icon: ShieldCheck,
      tag: 'Quality'
    },
    {
      title: 'Corporate IT Training',
      desc: 'Practical upskilling programs for engineering teams across cloud, web, data, QA, and AI practices.',
      icon: Users,
      tag: 'Enablement'
    }
  ];

  differentiators = [
    {
      title: 'Strategy Before Code',
      desc: 'We clarify outcomes, users, constraints, and success metrics before a single sprint begins.',
      icon: Sparkles,
      stat: '01'
    },
    {
      title: 'Product-Grade Engineering',
      desc: 'Every interface, API, and workflow is designed to feel polished, reliable, and easy to evolve.',
      icon: Cpu,
      stat: '02'
    },
    {
      title: 'Cloud-Native Delivery',
      desc: 'Secure infrastructure, CI/CD, observability, and release discipline are baked into the delivery path.',
      icon: CloudCog,
      stat: '03'
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We stay close after launch with iteration, support, knowledge transfer, and measurable improvement.',
      icon: Handshake,
      stat: '04'
    }
  ];

  techStackGroups = [
    {
      category: 'Frontend',
      tools: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'Web APIs']
    },
    {
      category: 'Backend',
      tools: ['.NET Core', 'Node.js', 'REST APIs', 'SQL Server', 'PostgreSQL']
    },
    {
      category: 'Cloud + DevOps',
      tools: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      category: 'AI + Data',
      tools: ['Python', 'Power BI', 'Automation', 'Analytics', 'ML Workflows']
    }
  ];

  portfolio = [
    {
      title: 'AI Analytics Command Center',
      eyebrow: 'Dashboard & Analytics',
      desc: 'A real-time decision cockpit for leadership teams with predictive signals, anomaly alerts, and governed reporting.',
      image: '/images/project1.png',
      results: ['94% insight accuracy', '40+ reporting hours saved']
    },
    {
      title: 'Cloud Infrastructure Modernization',
      eyebrow: 'Cloud Solutions',
      desc: 'A resilient cloud migration program with automated deployments, observability, and cost-aware scaling.',
      image: '/images/project2.png',
      results: ['10x scaling headroom', '40% infrastructure savings']
    },
    {
      title: 'Enterprise Workflow Platform',
      eyebrow: 'Custom Software',
      desc: 'A secure operations platform connecting approvals, ERP data, field teams, and executive dashboards.',
      image: '/images/company-culture.png',
      results: ['Unified operations', 'Faster release cycles']
    }
  ];

  processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Understand the business goal, users, systems, risk, and opportunity.'
    },
    {
      step: '02',
      title: 'Architect',
      desc: 'Define the product blueprint, data model, integrations, and delivery roadmap.'
    },
    {
      step: '03',
      title: 'Prototype',
      desc: 'Validate key flows with high-fidelity UX and fast technical proof points.'
    },
    {
      step: '04',
      title: 'Build',
      desc: 'Ship in focused sprints with clean engineering, reviews, and demos.'
    },
    {
      step: '05',
      title: 'Assure',
      desc: 'Test usability, security, performance, and release readiness before launch.'
    },
    {
      step: '06',
      title: 'Scale',
      desc: 'Deploy, monitor, optimize, and keep improving the product after release.'
    }
  ];

  testimonials = [
    {
      quote: 'Innovance TechLabs helped us turn a scattered workflow into a clean, measurable platform. The team understood both the product and the engineering depth we needed.',
      author: 'Priya Shah',
      role: 'Operations Director, Growth Platform'
    },
    {
      quote: 'Their dashboard work made our leadership reviews dramatically faster. The experience feels premium, but the backend is where the real discipline shows.',
      author: 'Daniel Mehta',
      role: 'Head of Data, SaaS Company'
    },
    {
      quote: 'We needed a partner who could move quickly without creating technical debt. Innovance delivered with clarity, ownership, and excellent communication.',
      author: 'Aarav Patel',
      role: 'Founder, Cloud Services Startup'
    }
  ];

  consultationHighlights = [
    'Product and architecture review',
    'Cloud, AI, and automation opportunities',
    'Roadmap with practical next steps'
  ];
}
