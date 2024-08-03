import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Project } from '../../model/Project';
import { ProjectCardComponent } from '../shared/cards/project-card/project-card.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent
  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  projectList: Project[] = [
    {
      image: '/assets/projeto/projeto-1.png',
      name: 'Portfólio Web Aldo Souza',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad et accusantium natus ullam dolorem nisi, explicabo, eos similique aspernatur provident quisquam voluptate facilis hic, cupiditate debitis dignissimos a iste quod.',
      languages: ["Angular", "Javascript", "Typescript", "Tailwindcss", "HTML", "SCSS"],
      linkDeploy: 'https://github.com/aldocsouza'
    },
    {
      image: '/assets/project.jpg',
      name: 'portifólio modelo',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad et accusantium natus ullam dolorem nisi, explicabo, eos similique aspernatur provident quisquam voluptate facilis hic, cupiditate debitis dignissimos a iste quod.',
      languages: ["Java", "Spring Boot", "Angular", "Javascript", "Typescript", "MySQL", "PostgreSQL", "Jwt Token"],
      linkDeploy: 'https://github.com/aldocsouza'
    }
  ]

}
