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
      image: '/assets/projeto/portfolio.jpg',
      name: 'Portfólio Web Aldo Souza',
      description: 'Este projeto foi criado para apresentar minhas habilidades, experiências e projetos de uma forma organizada e atraente. Este portfólio não apenas demonstra minhas habilidades técnicas, mas também reflete minha paixão pelo desenvolvimento de software e meu compromisso com a excelência. Sinta-se à vontade para explorar!',
      languages: ["Angular", "Javascript", "Typescript", "Tailwindcss", "HTML", "SCSS", "GIT", "CI/CD"],
      linkDeploy: 'https://github.com/aldocsouza/portfolioweb-aldodev',
      present: true
    },
  ]

}
