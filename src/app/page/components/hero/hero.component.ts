import { Component } from '@angular/core';
import { IconGitComponent } from '../icons/icon-git/icon-git.component';
import { IconInComponent } from '../icons/icon-in/icon-in.component';
import { IconArrowRightComponent } from '../icons/icon-arrow-right/icon-arrow-right.component';
import { ButtonComponent } from '../button/button.component';
import { IconMoonComponent } from '../icons/icon-moon/icon-moon.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'hero-content',
  standalone: true,
  imports: [
    IconGitComponent,
    IconInComponent,
    IconArrowRightComponent,
    ButtonComponent,
    IconMoonComponent,
    AboutMeComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
