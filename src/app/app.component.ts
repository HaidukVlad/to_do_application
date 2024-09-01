import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroPagesComponent } from './intro-pages/intro-pages.component';
// import { NgIconComponent, provideIcons } from '@ng-icons/core';
// import { featherAirplay } from '@ng-icons/feather-icons';
// import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroPagesComponent],
  // imports: [RouterOutlet, IntroPagesComponent, NgIconComponent],
  // viewProviders: [provideIcons({ featherAirplay, heroUsers })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
