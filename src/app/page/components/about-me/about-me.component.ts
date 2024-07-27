import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarSvgComponent } from '../shared/avatar-svg/avatar-svg.component';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [
    AvatarSvgComponent,
    CommonModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  theme: string = 'light'

}
