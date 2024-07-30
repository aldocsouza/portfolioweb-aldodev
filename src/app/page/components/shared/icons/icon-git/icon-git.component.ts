import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-git',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './icon-git.component.html',
  styleUrl: './icon-git.component.scss'
})
export class IconGitComponent {

  @Input() iconClass: string = 'default'

}
