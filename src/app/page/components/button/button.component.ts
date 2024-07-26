import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconArrowRightComponent } from '../icons/icon-arrow-right/icon-arrow-right.component';

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule,
    IconArrowRightComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() btnStyle: string = 'btn';
  @Input() btnTitle: string = 'default'

}
