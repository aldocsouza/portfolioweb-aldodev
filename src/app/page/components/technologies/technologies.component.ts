import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PostgresComponent } from '../shared/icons/technologies/postgres/postgres.component';
import { AngularComponent } from '../shared/icons/technologies/angular/angular.component';
import { BootstrapComponent } from '../shared/icons/technologies/bootstrap/bootstrap.component';
import { GitComponent } from '../shared/icons/technologies/git/git.component';
import { JavaComponent } from '../shared/icons/technologies/java/java.component';
import { JavascriptComponent } from '../shared/icons/technologies/javascript/javascript.component';
import { MysqlComponent } from '../shared/icons/technologies/mysql/mysql.component';
import { SpringComponent } from '../shared/icons/technologies/spring/spring.component';
import { TailwindComponent } from '../shared/icons/technologies/tailwind/tailwind.component';
import { TypescriptComponent } from '../shared/icons/technologies/typescript/typescript.component';

@Component({
  selector: 'technologies',
  standalone: true,
  imports: [
    CommonModule,
    PostgresComponent,
    AngularComponent,
    BootstrapComponent,
    GitComponent,
    JavaComponent,
    JavascriptComponent,
    MysqlComponent,
    SpringComponent,
    TailwindComponent,
    TypescriptComponent
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
 theme: string = 'light'
}
