import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  themeState:string = 'light';

  // fromEvent()

  constructor (
    private elementRef: ElementRef,
  ) {};

  toggleTheme() {
    const mode = this.themeState === 'light' ? 'dark' : 'light';
    // const html = document.documentElement;
    const html = document.body;
    
    if (this.themeState === 'light') {
      this.themeState = 'dark';
      html.classList.add('dark-theme');
      
    }else {
      this.themeState = 'light';
      html.classList.remove('dark-theme');

    }
    
  }
  

}
