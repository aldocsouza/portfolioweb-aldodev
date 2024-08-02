import { Component, Input } from '@angular/core';
import { Certification } from '../../../../model/Certification';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../../services/dark-mode.service';

@Component({
  selector: 'certification-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss'
})
export class CertificationCardComponent {
  @Input() certList!: Certification;

  constructor(public darkModeService: DarkModeService){}


}
