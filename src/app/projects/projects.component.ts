import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'FAV-MOV Movie Recommendation Platform',
      description:
        'A personalized movie recommendation system with authentication, watchlists, and reviews.',
      technologies: ['Angular','HTML', 'CSS' ],
      github: 'https://github.com/sahilsk24/FAV-MOV',
      demo: 'https://eav-mov-demo.netlify.app',
    },
    {
      title: 'Tech Path Way',
      description:
        'Helps users set career goals, track progress, and explore curated resources.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Postman'],
      github: 'https://github.com/your-username/career-planner',
      demo: '',
    },
  ];
}
