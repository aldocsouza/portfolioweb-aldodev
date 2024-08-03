import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  localStorage = this.document.defaultView?.localStorage;

  darkModeSignal = signal<string>(this.localStorage?.getItem('darkMode') ?? 'dark')

  constructor(@Inject(DOCUMENT) private document: Document) {  }

  updateTheme(){
    this.darkModeSignal.update((value) => value === 'dark' ? 'null' : 'dark');
    this.localStorage?.setItem('darkMode', this.darkModeSignal())
  }
}
