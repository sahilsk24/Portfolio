import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  frontend = ['Angular', 'HTML5', 'CSS3', 'TypeScript'];
  backend = ['Java', 'Spring Boot', 'REST APIs'];
  database = ['MongoDB', 'MySQL'];
  tools = ['Git', 'Postman', 'Figma', 'VS Code'];
  other = ['Agile', 'Responsive Design', 'API Integration'];
}
