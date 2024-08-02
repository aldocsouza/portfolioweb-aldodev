import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarSvgComponent } from '../shared/avatar-svg/avatar-svg.component';
import { DarkModeService } from '../../services/dark-mode.service';

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

  constructor(public darkModeService: DarkModeService){}

}
