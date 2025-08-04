import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-extra',
  imports: [CommonModule],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css'
})
export class ExtraComponent {
extras = [
 
  {
    "title": "Startup and Innovation  V Launch Pad (2023)",
    "description": "Achieved a top position in the V Launch Pad competition with the idea 'Tastes of India', a platform offering authentic regional dishes from various Indian states at a single location. Recognized for its innovative approach in promoting Indian culinary diversity."
  },
  {
    "title": "Core Member  Discipline Committee (Vitopia Event, 2024)",
    "description": "Led a team of 10 members to manage crowd control and ensure smooth execution of the Vitopia cultural event. Coordinated with other committees to resolve issues and deliver a positive experience for attendees."
  },
  {
    "title": "Volunteer Vitopia (2023)",
    "description": "Actively supported event logistics and hospitality. Helped coordinate participants and maintained decorum across various zones."
  },
  {
    "title": "Documentation Member Club Kalki (Professional Development Club)",
    "description": "Managed and maintained event records, created project documentation, and contributed to content planning for workshops and professional events."
  },
  {
    "title": "Cricket Intra-Squad Tournament (2024)",
    "description": "Represented the department cricket team and reached the semifinals in an intra-college tournament."
  }

  ];
}
