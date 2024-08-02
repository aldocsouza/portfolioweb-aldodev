import { Component } from '@angular/core';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutMeComponent } from "../components/about-me/about-me.component";
import { TechnologiesComponent } from '../components/technologies/technologies.component';
import { ExperiencesComponent } from '../components/experiences/experiences.component';
import { MyProjectsComponent } from '../components/my-projects/my-projects.component';
import { CertificationsComponent } from '../components/certifications/certifications.component';
import { FooterComponent } from '../components/footer/footer.component';
import { DarkModeService } from '../services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutMeComponent,
    TechnologiesComponent,
    ExperiencesComponent,
    MyProjectsComponent,
    CertificationsComponent,
    FooterComponent,
    CommonModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor(public darkModeService: DarkModeService){}

}
