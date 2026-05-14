import { Component } from '@angular/core';
import { LucideAngularModule, ExternalLink, Github } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly ExternalLinkIcon = ExternalLink;
  readonly GithubIcon = Github;

  projects = [
    {
      title: 'Aura AI Analytics',
      desc: 'A futuristic predictive analytics dashboard built for a Fortune 500 fintech company. Integrates custom machine learning models with a highly responsive Angular frontend.',
      image: 'assets/images/project1.png',
      tags: ['Angular', 'Python', 'TensorFlow', 'Azure'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Nimbus Cloud Infra',
      desc: 'Complete cloud architecture overhaul and migration for a global e-commerce brand. Improved scaling capability by 10x while reducing infrastructure costs by 40%.',
      image: 'assets/images/project2.png',
      tags: ['AWS', 'Kubernetes', 'Terraform', 'Node.js'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Nexus Enterprise Portal',
      desc: 'A comprehensive B2B portal with real-time inventory tracking, complex workflow approvals, and seamless third-party ERP integrations.',
      image: 'assets/images/project3.png', // We don't have this image yet, but it can use the fallback
      tags: ['React', '.NET Core', 'SQL Server', 'Redis'],
      demoLink: '#',
      githubLink: '#'
    }
  ];
}
