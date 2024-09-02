// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { LoginAndRegistrationModule } from './login-and-registration/login-and-registration.module';
// import { LoginComponent } from "./login-and-registration/login/login.component";
// import { RegistrationComponent } from "./login-and-registration/registration/registration.component";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, LoginAndRegistrationModule, LoginComponent, RegistrationComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'todo';
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
