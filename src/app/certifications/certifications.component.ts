import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'Java Full Stack Developer',
      issuer: 'I am neo',
      year: '2024',
      link: 'assets/java.png',
    },
    {
      title: 'Web Development',
      issuer: 'prodigy infotech',
      year: '2024',
      link: 'assets/prodigy.png',
    },
    {
      title: 'Generative AI Professional',
      issuer: 'Oracle',
      year: '2025',
      link: 'assets/oracle.png',
    },
  ];
}