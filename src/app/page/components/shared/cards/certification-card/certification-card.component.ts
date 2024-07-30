import { Component, Input } from '@angular/core';
import { Certification } from '../../../../model/Certification';
import { CommonModule } from '@angular/common';

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

  theme: string = 'light'

  @Input() certList!: Certification;

}
