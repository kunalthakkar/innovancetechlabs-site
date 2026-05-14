import { Component } from '@angular/core';
import { LucideAngularModule, BookOpen, GraduationCap, Award, FileCode } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  readonly BookOpenIcon = BookOpen;
  readonly GraduationCapIcon = GraduationCap;
  readonly AwardIcon = Award;
  readonly FileCodeIcon = FileCode;
}
