import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle,
  CloudCog,
  Code,
  Database,
  Gauge,
  Globe,
  Handshake,
  Layers,
  MonitorSmartphone,
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
  readonly CheckCircleIcon = CheckCircle;
  readonly LayersIcon = Layers;
  readonly SparklesIcon = Sparkles;

  clientele = ['Startups', 'SMBs', 'Enterprise Teams', 'Founders', 'Operations Leaders', 'Training Cohorts'];

  storyStats = [
    { value: '50+', label: 'Products, dashboards, platforms, and digital experiences delivered' },
    { value: '8', label: 'Connected service lines across software, cloud, AI, QA, and training' },
    { value: '24/7', label: 'Launch-support mindset for production systems and growing teams' },
    { value: '1', label: 'Integrated partner for discovery, build, release, and enablement' }
  ];

  servicePortfolio = [
    {
      title: 'Software Product Engineering',
      desc: 'Custom platforms, SaaS products, portals, integrations, and workflow systems built around real business operations.',
      icon: Code
    },
    {
      title: 'AI & Automation Services',
      desc: 'Useful AI assistants, document intelligence, smart workflows, and automation programs that reduce repetitive work.',
      icon: BrainCircuit
    },
    {
      title: 'Cloud Application Development',
      desc: 'Cloud-native apps, migration planning, infrastructure automation, monitoring, and resilient deployments.',
      icon: CloudCog
    },
    {
      title: 'Data, Dashboards & Analytics',
      desc: 'Executive dashboards, operational reporting, Power BI, and data products that turn information into decisions.',
      icon: Database
    },
    {
      title: 'Quality Engineering',
      desc: 'Manual and automated QA, accessibility checks, performance testing, and release readiness for dependable launches.',
      icon: ShieldCheck
    },
    {
      title: 'Team Training & Enablement',
      desc: 'Practical training for web, cloud, QA, data, AI, and final-year project support with hands-on guidance.',
      icon: Users
    }
  ];

  industries = [
    {
      title: 'Healthcare & Wellness',
      desc: 'Patient-facing portals, reporting workflows, scheduling tools, and secure data experiences.',
      icon: Building2
    },
    {
      title: 'Finance & Operations',
      desc: 'Approval flows, dashboards, internal platforms, and automation for risk-aware business teams.',
      icon: Gauge
    },
    {
      title: 'Retail & Commerce',
      desc: 'Customer journeys, inventory visibility, CRM touchpoints, and analytics for growing brands.',
      icon: Globe
    },
    {
      title: 'Education & Training',
      desc: 'Learning portals, certification workflows, cohort dashboards, and guided project support.',
      icon: MonitorSmartphone
    }
  ];

  caseStudies = [
    {
      title: 'AI Operations Command Center',
      category: 'Analytics + AI',
      desc: 'A real-time decision cockpit with anomaly alerts, role-based dashboards, and predictive workflow signals.',
      image: '/images/project1.png',
      results: ['Faster leadership reviews', 'Automated exception tracking']
    },
    {
      title: 'Cloud Modernization Roadmap',
      category: 'Cloud + DevOps',
      desc: 'A scalable cloud architecture program with CI/CD, observability, cost-aware release planning, and team handover.',
      image: '/images/project2.png',
      results: ['Cleaner release cycles', 'More predictable scaling']
    },
    {
      title: 'Enterprise Workflow Platform',
      category: 'Custom Software',
      desc: 'A secure operations system connecting approvals, documents, field teams, and management reporting.',
      image: '/images/company-culture.png',
      results: ['Unified process visibility', 'Lower manual follow-up']
    }
  ];

  insights = [
    {
      type: 'Guide',
      title: 'How to plan an AI automation project without creating more operational noise',
      desc: 'A practical readiness checklist for choosing the right workflows, data sources, and success metrics.'
    },
    {
      type: 'Playbook',
      title: 'Cloud modernization decisions every growing product team should make early',
      desc: 'Architecture, release, monitoring, and cost choices that keep platforms easier to scale.'
    },
    {
      type: 'Framework',
      title: 'What stakeholders need from dashboards before they trust the numbers',
      desc: 'How to align reporting design with business questions, data quality, and action ownership.'
    }
  ];

  trustSignals = [
    {
      title: 'Security-aware architecture',
      desc: 'Access, data flows, environments, and release paths are considered from the start.',
      icon: ShieldCheck
    },
    {
      title: 'Transparent delivery',
      desc: 'Demos, documentation, and decision logs keep stakeholders aligned throughout delivery.',
      icon: Workflow
    },
    {
      title: 'Quality gates',
      desc: 'QA, performance, accessibility, and launch checks are built into the release path.',
      icon: CheckCircle
    },
    {
      title: 'Long-term ownership',
      desc: 'Support, optimization, and training help your team keep improving after launch.',
      icon: Handshake
    },
    {
      title: 'Practical automation',
      desc: 'AI and workflow automation are scoped around measurable business value.',
      icon: Bot
    },
    {
      title: 'Fast validation',
      desc: 'Prototypes and technical proofs reduce risk before larger engineering commitments.',
      icon: Zap
    }
  ];
}
