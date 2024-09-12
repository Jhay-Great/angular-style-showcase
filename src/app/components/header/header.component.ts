import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { CustomDirectiveDirective } from '../../directives/custom-directive.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent, CustomDirectiveDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
