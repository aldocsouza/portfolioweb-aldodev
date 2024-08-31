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
      period: 'Ago 2024 - Presente',
      name: 'IASEP - Instituto de Assistência aos Servidores do Estado do Pará',
      role: 'Desenvolvedor Java + Angular (Cargo Oficial: Gerente de Comissão DAS)',
      description: 'Embora o título oficial fosse de "Gerente de Comissão DAS", minhas responsabilidades reais incluíam o Desenvolvimento full-stack em Java e Angular. Fui colocado nesse cargo para continuar o trabalho de desenvolvedor principal que já realizava como estagiário, focado no desenvolvimento de soluções tecnológicas para a instituição.',

      previous: true,
      previousPeriod: 'Out 2023 - Ago 2024',
      previousRole: 'Estagiário Desenvolvedor',
      previousDescription: 'Atuei como desenvolvedor principal em projetos, contribuindo com expertise tanto no front-end com Angular v15+ quanto no back-end com Java. Criei APIs utilizando Spring Boot, implementei autenticação de usuários via JWT Token e integrei back-end, front-end e banco de dados. Além disso, realizei testes de software abrangentes e ofereci instrução aos usuários para garantir a eficácia das soluções desenvolvidas.',
      languages: ["Java", "Spring Boot", "Angular", "Javascript", "Typescript", "MySQL", "PostgreSQL", "Jwt Token", "Git", "GitHub"]
    }
  ]
}

