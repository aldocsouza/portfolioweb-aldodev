import { Component } from '@angular/core';
import { IconGitComponent } from '../shared/icons/icon-git/icon-git.component';
import { IconInComponent } from '../shared/icons/icon-in/icon-in.component';
import { DarkModeService } from '../../services/dark-mode.service';
import { IconEmailComponent } from '../shared/icons/icon-email/icon-email.component';

@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [
    IconGitComponent,
    IconInComponent,
    IconEmailComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public darkModeService: DarkModeService){}

}
