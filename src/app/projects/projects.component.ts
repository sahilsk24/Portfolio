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
      demo: 'https://favmov24.netlify.app/',
    },
    {
      title: 'Tech Path Way',
      description:
        'Helps users set career goals, track progress, and explore curated resources.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Postman'],
      github: '',
      demo: '',
    },
    {
      title: 'Weapon detection using YOLOv12',
      description:
        'A real-time weapon detection system using YOLOv12 for accurately identifying and locating firearms or knives in images to enhance public safety and surveillance.',
      technologies: ['python', 'YOLOv12'],
      github: 'https://www.kaggle.com/code/sahilshaik24/weapon-detection-using-yolo-v12',
      demo: '',
    },
  ];
}
