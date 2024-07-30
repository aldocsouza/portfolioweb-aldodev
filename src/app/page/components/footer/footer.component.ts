import { Component } from '@angular/core';
import { IconGitComponent } from '../shared/icons/icon-git/icon-git.component';
import { IconInComponent } from '../shared/icons/icon-in/icon-in.component';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [
    IconGitComponent,
    IconInComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
