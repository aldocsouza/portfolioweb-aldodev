import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-in',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './icon-in.component.html',
  styleUrl: './icon-in.component.scss',
})
export class IconInComponent {

  @Input() iconClass: string = "default";


}
