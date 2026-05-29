import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArrowRight, Award, BookOpen, CheckCircle, CloudCog, FileCode, GraduationCap, Users } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly CheckCircleIcon = CheckCircle;
  readonly GraduationCapIcon = GraduationCap;

  programs = [
    {
      title: 'AI & Technology Training',
      desc: 'Modern training across AI workflows, full-stack development, cloud foundations, data analytics, and automation.',
      icon: BookOpen,
      features: ['Live interactive sessions', 'Mentor-led labs', 'Real-world case studies']
    },
    {
      title: 'Corporate Team Enablement',
      desc: 'Upskilling programs for teams adopting new engineering practices, cloud platforms, QA systems, or analytics workflows.',
      icon: Users,
      features: ['Custom curriculum', 'Role-based learning paths', 'Team handover materials']
    },
    {
      title: 'Cloud Certification Prep',
      desc: 'Structured preparation for cloud fundamentals and architecture paths with guided practice and review sessions.',
      icon: CloudCog,
      features: ['Azure and AWS tracks', 'Practice assessments', 'Architecture explanations']
    },
    {
      title: 'Project-Based Learning',
      desc: 'Build a real project with guidance on architecture, documentation, code organization, testing, and presentation.',
      icon: FileCode,
      features: ['Source code guidance', 'Documentation support', 'Presentation preparation']
    },
    {
      title: 'Completion Certification',
      desc: 'Learners can receive an Innovance TechLabs course completion certificate after finishing internal programs.',
      icon: Award,
      features: ['Completion criteria', 'Skill validation', 'Portfolio-ready outcomes']
    }
  ];

  projectSupport = [
    'Project idea selection and scope refinement',
    'Architecture, database, and module planning',
    'Frontend and backend implementation guidance',
    'Testing, documentation, and demo preparation',
    'Final presentation flow and explanation support'
  ];
}
