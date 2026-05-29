import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle,
  CloudCog,
  Code,
  Database,
  Gauge,
  Globe,
  Layers,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap
} from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly CheckCircleIcon = CheckCircle;
  readonly GaugeIcon = Gauge;
  readonly LayersIcon = Layers;
  readonly RocketIcon = Rocket;
  readonly SparklesIcon = Sparkles;
  readonly WorkflowIcon = Workflow;
  readonly ZapIcon = Zap;

  services = [
    {
      title: 'Custom Software Development',
      desc: 'Tailored platforms, portals, workflow engines, integrations, APIs, and internal systems built around your real business process.',
      icon: Code,
      outcomes: ['Scalable architecture', 'Clean user journeys', 'Secure integrations']
    },
    {
      title: 'Web Development',
      desc: 'Modern websites, SaaS frontends, enterprise portals, dashboards, and Angular or React applications with premium UI quality.',
      icon: Globe,
      outcomes: ['Responsive UX', 'SEO-friendly builds', 'Fast performance']
    },
    {
      title: 'Mobile App Development',
      desc: 'Product-ready mobile experiences for customers, employees, and field teams with reliable backend connectivity.',
      icon: MonitorSmartphone,
      outcomes: ['Smooth app flows', 'API-first design', 'Release-ready builds']
    },
    {
      title: 'Cloud Solutions',
      desc: 'Cloud migration, infrastructure design, DevOps automation, observability, deployments, and cost-aware scaling.',
      icon: CloudCog,
      outcomes: ['AWS and Azure', 'CI/CD pipelines', 'Production monitoring']
    },
    {
      title: 'AI & Automation',
      desc: 'AI-assisted workflows, chat and document intelligence, predictive systems, and automation that removes repetitive work.',
      icon: BrainCircuit,
      outcomes: ['Workflow automation', 'AI assistants', 'Decision support']
    },
    {
      title: 'Dashboard & Analytics',
      desc: 'Operational dashboards, executive reporting, Power BI solutions, live metrics, and data experiences people actually use.',
      icon: Database,
      outcomes: ['Real-time views', 'Actionable metrics', 'Data storytelling']
    },
    {
      title: 'Testing & QA',
      desc: 'Manual and automated QA practices that improve reliability, performance, accessibility, security, and release confidence.',
      icon: ShieldCheck,
      outcomes: ['Test automation', 'Regression coverage', 'Launch readiness']
    },
    {
      title: 'Corporate IT Training',
      desc: 'Hands-on training programs for teams moving into cloud, web, data, QA, automation, and modern engineering practices.',
      icon: Users,
      outcomes: ['Custom curriculum', 'Real project labs', 'Team enablement']
    }
  ];

  solutionPillars = [
    {
      title: 'Discovery & Architecture',
      desc: 'Map goals, users, systems, risks, and success metrics before implementation begins.'
    },
    {
      title: 'Design & Engineering',
      desc: 'Build premium interfaces and stable backend systems with frequent demos and review cycles.'
    },
    {
      title: 'Cloud & Release',
      desc: 'Deploy with CI/CD, observability, performance checks, and support for production adoption.'
    }
  ];

  engagementModels = [
    'Fixed-scope product builds',
    'Dedicated development team',
    'Modernization and migration sprint',
    'AI automation discovery',
    'Dashboard and reporting program',
    'Corporate training cohort'
  ];
}
