import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ExperienceCardComponent } from '../shared/cards/experience-card/experience-card.component';
import { Company } from '../../model/Company';
import { IconGitComponent } from '../shared/icons/icon-git/icon-git.component';
import { IconInComponent } from '../shared/icons/icon-in/icon-in.component';
import { IconEmailComponent } from '../shared/icons/icon-email/icon-email.component';

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceCardComponent,
    IconGitComponent,
    IconInComponent,
    IconEmailComponent
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
      description: 'Atuei como desenvolvedor principal em projetos, contribuindo com expertise tanto no front-end com Angular v15+ quanto no back-end com Java. Criei APIs utilizando Spring Boot, implementei autenticação de usuários via JWT Token e integrei back-end, front-end e banco de dados. Além disso, realizei testes de software abrangentes e ofereci instrução aos usuários para garantir a eficácia das soluções desenvolvidas.',
      languages: ["Java", "Spring Boot", "Angular", "Javascript", "Typescript", "MySQL", "PostgreSQL", "Jwt Token", "Git", "GitHub"]
    }
  ]

}

