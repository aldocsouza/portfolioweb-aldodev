import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ExperienceCardComponent } from '../shared/experience-card/experience-card.component';

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
}
