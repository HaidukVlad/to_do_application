import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgIconComponent
  ],
  providers: [
    provideIcons({ heroChevronLeft })
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  public username: string = '';
  public password: string = '';

  public usernameError: string = '';
  public passwordError: string = '';

  public shortUsernameErrorMessage: string = 'Имя пользователя слишком короткое';
  public longUsernameErrorMessage: string = 'Имя пользователя слишком длинное';

  public shortPasswordErrorMessage: string = 'Пароль слишком короткий';
  public longPasswordErrorMessage: string = 'Пароль слишком длинный';
  public incorrectPasswordErrorMessage: string = 'Пароль должен содержать цифры, буквы латинского алфавита разного регистра и специальные символы';

  public hasUsernameError: boolean = false;
  public hasPasswordError: boolean = false;

  onUsernameChange() {}
  onPasswordChange() {}
}
