import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ExperienceCardComponent } from '../shared/cards/experience-card/experience-card.component';
import { Company } from '../../model/Company';
import { IconGitComponent } from '../shared/icons/icon-git/icon-git.component';
import { IconInComponent } from '../shared/icons/icon-in/icon-in.component';

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceCardComponent,
    IconGitComponent,
    IconInComponent
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experiencesLangs: Company[] = [
    {
      recent: true,
      logo: '/assets/iasep.png',
      period: 'Out 2023 - Presente',
      name: 'IASEP - Instituto de Assistência aos Servidores do Estado do Pará',
      role: 'Estagiário Desenvolvedor',
      description: 'Responsável como desenvolvedor principal em projetos de sistemas full-stack, incluindo front-end com Angular v16, v17 e v18, criação de APIs com Spring Boot, autenticação de usuários via JWT Token, integração Back-end | Front-end | Banco de Dados, testes de software e instrução aos usuários',
      languages: ["Java", "Spring Boot", "Angular", "Javascript", "Typescript", "MySQL", "PostgreSQL", "Jwt Token", "Git", "GitHub"]
    }
  ]

}
