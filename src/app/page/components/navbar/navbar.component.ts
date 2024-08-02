import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { IconMoonComponent } from '../shared/icons/icon-moon/icon-moon.component';
import { IconSunComponent } from '../shared/icons/icon-sun/icon-sun.component';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    CommonModule,
    IconMoonComponent,
    IconSunComponent,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public darkModeService: DarkModeService){}

  troggleThemeMode(){
    this.darkModeService.updateTheme()
  }

}
