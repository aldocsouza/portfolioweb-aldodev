import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-git',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './icon-git.component.html',
})
export class IconGitComponent {

  @Input() iconClass: string = 'default'

}
