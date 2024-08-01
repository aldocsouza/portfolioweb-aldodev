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
  theme: string = 'light'

  experiencesLangs: Company[] = [
    {
      recent: true,
      logo: '/assets/iasep.png',
      period: 'Out 2023 - Presente',
      name: 'IASEP - Instituto de Assistência aos Servidores do Estado do Pará',
      role: 'Estagiário Desenvolvedor Full Stack',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad et accusantium natus ullam dolorem nisi, explicabo, eos similique aspernatur provident quisquam voluptate facilis hic, cupiditate debitis dignissimos a iste quod.',
      languages: ["Java", "Spring Boot", "Angular", "Javascript", "Typescript", "MySQL", "PostgreSQL", "Jwt Token"]
    }
  ]

}
