import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginAndRegistrationModule } from './login-and-registration/login-and-registration.module';
import { LoginComponent } from "./login-and-registration/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginAndRegistrationModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
