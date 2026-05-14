import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight, Code, Database, Globe, Monitor, Cloud, Shield, CheckCircle, BrainCircuit, Cpu, Rocket, Users, Settings, Zap, Network, Building2 } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly CheckCircleIcon = CheckCircle;
  readonly GlobeIcon = Globe;
  readonly BrainCircuitIcon = BrainCircuit;
  readonly CpuIcon = Cpu;
  readonly UsersIcon = Users;
  readonly RocketIcon = Rocket;
  readonly ZapIcon = Zap;
  readonly SettingsIcon = Settings;
  readonly NetworkIcon = Network;
  readonly Building2Icon = Building2;
  
  services = [
    { title: 'Web Development', desc: 'Scalable modern web applications and immersive digital experiences.', icon: Monitor, delay: 100 },
    { title: 'Mobile App Development', desc: 'Native and cross-platform mobile solutions.', icon: Zap, delay: 200 },
    { title: 'Cloud Solutions', desc: 'AWS & Azure cloud architecture, migration, and scaling.', icon: Cloud, delay: 300 },
    { title: 'AI Automation', desc: 'Predictive analytics, NLP, and intelligent workflows.', icon: BrainCircuit, delay: 400 },
    { title: 'Dashboards & Analytics', desc: 'Real-time data visualization and business intelligence.', icon: Database, delay: 500 },
    { title: 'Software Testing', desc: 'Enterprise-grade QA, automation, and security testing.', icon: Shield, delay: 600 },
    { title: 'Corporate Training', desc: 'Upskilling teams with modern technologies.', icon: Users, delay: 700 },
    { title: 'Custom Enterprise Software', desc: 'Tailored solutions for complex business needs.', icon: Building2, delay: 800 }
  ];

  whyChooseUs = [
    { title: 'Experienced Developers', icon: Code },
    { title: 'Scalable Architecture', icon: Network },
    { title: 'Agile Development', icon: Rocket },
    { title: 'Modern Tech Stack', icon: Cpu },
    { title: 'Secure & Cloud Ready Solutions', icon: Shield },
    { title: 'Long-Term Technical Support', icon: Settings }
  ];

  techStack = [
    '.NET', 'Angular', 'React', 'Azure', 'AWS', 'Node.js', 'SQL Server', 'Docker', 'Kubernetes', 'AI Tools',
    '.NET', 'Angular', 'React', 'Azure', 'AWS', 'Node.js', 'SQL Server', 'Docker', 'Kubernetes', 'AI Tools' // Duplicated for marquee effect
  ];

  processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding your vision and business requirements.' },
    { step: '02', title: 'Planning', desc: 'Architecting the solution and defining the roadmap.' },
    { step: '03', title: 'Development', desc: 'Agile execution with continuous feedback loops.' },
    { step: '04', title: 'Testing', desc: 'Rigorous QA to ensure security and performance.' },
    { step: '05', title: 'Deployment', desc: 'Seamless launch and cloud infrastructure setup.' },
    { step: '06', title: 'Support', desc: '24/7 maintenance and continuous improvements.' }
  ];

  testimonials = [
    { quote: "Innovance TechLabs completely transformed our legacy systems into a modern, lightning-fast platform. The AI integration was a game changer.", author: "Sarah Jenkins, CTO at NexusCorp" },
    { quote: "The dashboard they built for us saves over 40 hours of manual reporting every week. Their expertise in enterprise solutions is unmatched.", author: "Michael Chen, Data Director" },
    { quote: "Top-tier talent. Their developers integrated seamlessly with our in-house team, delivering high-quality code ahead of schedule.", author: "Emma Watson, VP Engineering" }
  ];
}
