import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IconInComponent } from '../icons/icon-in/icon-in.component';
import { IconGitComponent } from '../icons/icon-git/icon-git.component';

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

  @Input() imageSrc: string = '';
  @Input() busnessName: string= '';
  @Input() periodExp: string = '';
  @Input() role: string = '';
  @Input() description: string = '';
  @Input() talk: boolean = false;

}
