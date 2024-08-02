import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkModeSignal = signal('dark')

  constructor() { }

  updateTheme(){
    this.darkModeSignal.update((value) => value === 'dark' ? 'null' : 'dark');
  }
}
