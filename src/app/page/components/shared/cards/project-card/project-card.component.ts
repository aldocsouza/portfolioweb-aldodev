import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Project } from '../../../../model/Project';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  theme: string = 'light'

  @Input() reverse: string = ''
  @Input() projectList!: Project;

}
