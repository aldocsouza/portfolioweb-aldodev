import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FlowbiteService } from './page/services/flowbite.service';
import { DarkModeService } from './page/services/dark-mode.service';
//@ts-ignore
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio-aldodev';

  constructor(
    private flowbiteService: FlowbiteService,
    public darkModeService: DarkModeService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });

    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
