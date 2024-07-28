import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ExperienceCardComponent } from '../shared/cards/experience-card/experience-card.component';
import { Company } from '../../model/Company';

@Component({
  selector: 'experiences',
  standalone: true,
  imports: [
    CommonModule,
    ExperienceCardComponent
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  theme: string = 'light'

  experiencesLangs: Company[] = [
    {
      logo: '/assets/iasep.png',
      period: 'Out 2023 - Presente',
      name: 'iasep - instituto de assistência aos servidores do estado do pará',
      role: 'estagiário desenvolvedor full stack',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad et accusantium natus ullam dolorem nisi, explicabo, eos similique aspernatur provident quisquam voluptate facilis hic, cupiditate debitis dignissimos a iste quod.',
      languages: ["Java", "Spring Boot", "Angular", "Javascript", "Typescript", "MySQL", "PostgreSQL", "Jwt Token"]
    }
  ]

}
