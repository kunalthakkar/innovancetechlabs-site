import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Twitter, Linkedin, Github, Mail, MapPin, Phone, BrainCircuit } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly TwitterIcon = Twitter;
  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly PhoneIcon = Phone;
  readonly BrainCircuitIcon = BrainCircuit;
  currentYear = new Date().getFullYear();
}
