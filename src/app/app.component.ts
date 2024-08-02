import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './page/services/flowbite.service';
import { DarkModeService } from './page/services/dark-mode.service';
import { CommonModule } from '@angular/common';

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
    public darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }
}
