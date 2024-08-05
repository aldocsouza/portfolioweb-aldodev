import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-email',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './icon-email.component.html',
})
export class IconEmailComponent {

  @Input() iconClass: string = 'default'

}
