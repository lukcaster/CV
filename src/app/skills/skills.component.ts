import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  maxLevel: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'TypeScript/JavaScript', level: 7, maxLevel: 10 },
        { name: 'Python', level: 2, maxLevel: 10 },
        { name: 'Java', level: 5, maxLevel: 10 },
        { name: 'SQL', level: 4, maxLevel: 10 }
      ]
    },
    {
      title: 'Testing Frameworks & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Playwright', level: 7, maxLevel: 10 },
        { name: 'Selenium', level: 3, maxLevel: 10 },
        { name: 'Cypress', level: 0, maxLevel: 10 },
        { name: 'Postman', level: 6, maxLevel: 10 },
        { name: 'K6', level: 5, maxLevel: 10 },
        { name: 'Gattling', level: 5, maxLevel: 10 },
        { name: 'TestNG/JUnit', level: 4, maxLevel: 10 }
      ]
    },
    {
      title: 'Application Types',
      icon: '📱',
      skills: [
        { name: 'Web Applications', level: 8, maxLevel: 10 },
        { name: 'REST APIs', level: 8, maxLevel: 10 },
        { name: 'Mobile Apps', level: 0, maxLevel: 10 },
        { name: 'Desktop Applications', level: 3, maxLevel: 10 },
        { name: 'Microservices', level: 4, maxLevel: 10 }
      ]
    },
    {
      title: 'Testing Types',
      icon: '✅',
      skills: [
        { name: 'Functional Testing', level: 7, maxLevel: 10 },
        { name: 'API Testing', level: 8, maxLevel: 10 },
        { name: 'Performance Testing', level: 6, maxLevel: 10 },
        { name: 'E2E Testing', level: 7, maxLevel: 10 },
        { name: 'Integration Testing', level: 6, maxLevel: 10 },
        { name: 'Regression Testing', level: 8, maxLevel: 10 },
        { name: 'Manual Testing', level: 8, maxLevel: 10 }
      ]
    }
  ];

  getProgressArray(maxLevel: number): number[] {
    return Array.from({ length: maxLevel }, (_, i) => i);
  }
}
