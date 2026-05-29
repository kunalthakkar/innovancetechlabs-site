import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArrowRight, BriefcaseBusiness, CheckCircle } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly BriefcaseIcon = BriefcaseBusiness;
  readonly CheckCircleIcon = CheckCircle;

  projects = [
    {
      title: 'AI Analytics Command Center',
      category: 'Analytics + AI',
      desc: 'A decision cockpit for leadership teams with predictive signals, anomaly alerts, and role-based reporting.',
      image: '/images/project1.png',
      tags: ['Angular', 'AI Automation', 'Power BI', 'Cloud APIs'],
      results: ['Faster reporting cycles', 'Clearer exception tracking']
    },
    {
      title: 'Cloud Infrastructure Modernization',
      category: 'Cloud + DevOps',
      desc: 'A migration and deployment program with CI/CD, monitoring, security review, and cost-aware scaling.',
      image: '/images/project2.png',
      tags: ['Azure', 'AWS', 'CI/CD', 'Monitoring'],
      results: ['More reliable releases', 'Better scaling visibility']
    },
    {
      title: 'Enterprise Workflow Platform',
      category: 'Custom Software',
      desc: 'A secure operations platform connecting approvals, documents, field teams, and executive dashboards.',
      image: '/images/company-culture.png',
      tags: ['Custom APIs', 'Dashboards', 'Workflow UX', 'QA'],
      results: ['Unified process visibility', 'Lower manual follow-up']
    }
  ];

  projectSteps = [
    {
      title: 'Discover',
      desc: 'Clarify users, business goals, system constraints, and the success metrics that matter.'
    },
    {
      title: 'Prototype',
      desc: 'Validate core journeys and risky technical assumptions before full build investment.'
    },
    {
      title: 'Build and Assure',
      desc: 'Engineer in focused sprints with demos, reviews, QA, accessibility checks, and launch readiness.'
    },
    {
      title: 'Launch and Improve',
      desc: 'Deploy, monitor, support adoption, and continue improving based on real usage.'
    }
  ];
}
