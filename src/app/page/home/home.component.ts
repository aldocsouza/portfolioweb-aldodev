import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutMeComponent } from "../components/about-me/about-me.component";
import { TechnologiesComponent } from '../components/technologies/technologies.component';
import { ExperiencesComponent } from '../components/experiences/experiences.component';
import { MyProjectsComponent } from '../components/my-projects/my-projects.component';
import { CertificationsComponent } from '../components/certifications/certifications.component';
import { FooterComponent } from '../components/footer/footer.component';
import { DarkModeService } from '../services/dark-mode.service';

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
export class HomeComponent implements OnInit{
  mybutton: HTMLElement | null = null;

  constructor(public darkModeService: DarkModeService){}

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.mybutton = document.getElementById("myBtn");

      window.onscroll = () => {
        this.scrollFunction();
      };
    }
  }

  scrollFunction() {
    if (this.mybutton) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.mybutton.style.display = 'block';
      } else {
        this.mybutton.style.display = "none";
      }
    }
  }

  topFunction() {
    if (typeof document !== 'undefined') {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

}
