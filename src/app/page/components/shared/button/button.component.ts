import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IconArrowRightComponent } from '../icons/icon-arrow-right/icon-arrow-right.component';
import { IconArrowSquareComponent } from '../icons/icon-arrow-square/icon-arrow-square.component';
import { IconGitComponent } from "../icons/icon-git/icon-git.component";

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule,
    IconArrowRightComponent,
    IconArrowSquareComponent,
    IconGitComponent
],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() btnStyle: string = 'btn';
  @Input() btnTitle: string = 'default'
  @Output() buttonActive = new EventEmitter<boolean>(false);

  onClick(){
    this.buttonActive.emit(true)
  }

}
