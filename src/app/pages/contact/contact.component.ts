import { Component } from '@angular/core';
import { LucideAngularModule, MapPin, Mail, Phone, Send } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly MapPinIcon = MapPin;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly SendIcon = Send;
}
