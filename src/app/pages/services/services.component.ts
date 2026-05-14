import { Component } from '@angular/core';
import { LucideAngularModule, Monitor, Smartphone, LayoutDashboard, Cloud, ShieldCheck, BarChart } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { title: 'Web Development', desc: 'Custom enterprise web applications built with Angular, React, and robust backends like .NET and Node.js.', icon: Monitor },
    { title: 'Mobile App Development', desc: 'Native and cross-platform mobile experiences for iOS and Android using React Native and Flutter.', icon: Smartphone },
    { title: 'AI Dashboard Development', desc: 'Intelligent dashboards powered by ML models to provide actionable insights in real-time.', icon: LayoutDashboard },
    { title: 'Cloud Solutions (Azure, AWS)', desc: 'Cloud migration, serverless architecture, and DevOps automation to scale your infrastructure.', icon: Cloud },
    { title: 'QA & Testing Support', desc: 'Comprehensive automated and manual testing to ensure zero-defect releases.', icon: ShieldCheck },
    { title: 'Power BI Analytics', desc: 'Interactive data visualization and business intelligence solutions to drive data-driven decisions.', icon: BarChart }
  ];
}
