import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IconInComponent } from '../../icons/icon-in/icon-in.component';
import { IconGitComponent } from '../../icons/icon-git/icon-git.component';
import { Company } from '../../../../model/Company';

@Component({
  selector: 'experience-card',
  standalone: true,
  imports: [
    CommonModule,
    IconGitComponent,
    IconInComponent
  ],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {

  theme: string = 'light'

  @Input() talk: boolean = false;
  @Input() experiencesLangs!: Company;

}
