import { Component } from '@angular/core';

import { ButtonComponent } from '../shared/button/button.component';
import { IconGitComponent } from '../shared/icons/icon-git/icon-git.component';
import { IconInComponent } from '../shared/icons/icon-in/icon-in.component';
import { IconArrowRightComponent } from '../shared/icons/icon-arrow-right/icon-arrow-right.component';
import { IconMoonComponent } from '../shared/icons/icon-moon/icon-moon.component';

@Component({
  selector: 'hero-content',
  standalone: true,
  imports: [
    IconGitComponent,
    IconInComponent,
    IconArrowRightComponent,
    ButtonComponent,
    IconMoonComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
