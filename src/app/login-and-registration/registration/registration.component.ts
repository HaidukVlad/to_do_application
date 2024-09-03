import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft, heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgIconComponent,
    RouterModule
  ],
  providers: [
    provideIcons({ heroChevronLeft, heroEye, heroEyeSlash })
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public username: string = '';
  public password1: string = '';
  public password2: string = '';

  public usernameError: string = '';
  public password1Error: string = '';
  public password2Error: string = '';

  public shortUsernameErrorMessage: string = 'Имя пользователя слишком короткое';
  public longUsernameErrorMessage: string = 'Имя пользователя слишком длинное';

  public shortPasswordErrorMessage: string = 'Пароль слишком короткий';
  public longPasswordErrorMessage: string = 'Пароль слишком длинный';
  public incorrectPasswordErrorMessage: string = 'Пароль должен содержать цифры, буквы латинского алфавита разного регистра и специальные символы';
  public differentPasswordsErrorMessage: string = 'Пароли не совпадают';

  public hasUsernameError: boolean = false;
  public hasPassword1Error: boolean = false;
  public hasPassword2Error: boolean = false;

  onUsernameChange() {
    this.hasUsernameError = false;
    this.usernameError = '';

    if (this.username.length > 0 && this.username.length < 3) {
      this.hasUsernameError = true;
      this.usernameError = this.shortUsernameErrorMessage;
    } else if (this.username.length > 20) {
      this.hasUsernameError = true;
      this.usernameError = this.longUsernameErrorMessage;
    }

    this.updateLoginButtonState();
  }

  onPasswordChange() {
    this.hasPassword1Error = false;
    this.hasPassword2Error = false;
    this.password1Error = '';
    this.password2Error = '';

    const hasUpperCase = /[A-Z]/.test(this.password1);
    const hasLowerCase = /[a-z]/.test(this.password1);
    const hasNumbers = /\d/.test(this.password1);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>_-]/.test(this.password1);

    if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChars) {
      this.hasPassword1Error = true;
      this.password1Error = this.incorrectPasswordErrorMessage;
    } else if (this.password1.length > 0 && this.password1.length < 8) {
      this.hasPassword1Error = true;
      this.password1Error = this.shortPasswordErrorMessage;
    } else if (this.password1.length > 20) {
      this.hasPassword1Error = true;
      this.password1Error = this.longPasswordErrorMessage;
    }

    if (this.password1 !== this.password2) {
      this.hasPassword2Error = true;
      this.password2Error = this.differentPasswordsErrorMessage;
    }

    this.updateLoginButtonState();
  }

  private updateLoginButtonState() {
    const loginButton = document.querySelector('.loginBtn');

    if (
      this.username.length >= 3 &&
      this.username.length <= 20 &&
      this.password1.length >= 8 &&
      this.password1.length <= 20 &&
      this.password2.length >= 8 &&
      this.password2.length <= 20 &&
      this.password1 === this.password2 &&
      !this.hasUsernameError &&
      !this.hasPassword1Error &&
      !this.hasPassword2Error
    ) {
      loginButton?.removeAttribute('disabled');
    } else {
      loginButton?.setAttribute('disabled', '');
    }
  }
}
