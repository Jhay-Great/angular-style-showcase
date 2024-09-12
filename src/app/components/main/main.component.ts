import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BannerComponent, ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
