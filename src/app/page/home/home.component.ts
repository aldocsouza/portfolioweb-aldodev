import { Component } from '@angular/core';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutMeComponent } from "../components/about-me/about-me.component";
import { TechnologiesComponent } from '../components/technologies/technologies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutMeComponent,
    TechnologiesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
