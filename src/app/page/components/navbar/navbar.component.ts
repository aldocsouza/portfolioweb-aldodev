import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { IconMoonComponent } from '../shared/icons/icon-moon/icon-moon.component';
import { IconSunComponent } from '../shared/icons/icon-sun/icon-sun.component';

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
  mobileMenuOpen = false;

  theme: string = 'light'
  themeChange: boolean = false;

  troggleThemeMode(){
    this.themeChange = !this.themeChange;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
