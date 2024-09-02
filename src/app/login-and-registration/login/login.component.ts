import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgIconComponent,
    RouterModule
  ],
  providers: [
    provideIcons({ heroChevronLeft })
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

  public onUsernameChange() {
    this.hasUsernameError = false;

    if (this.username.length > 0 && this.username.length < 3) {
      this.hasUsernameError = true;
      this.usernameError = this.shortUsernameErrorMessage;
    } else if (this.username.length > 20) {
      this.hasUsernameError = true;
      this.usernameError = this.longUsernameErrorMessage;
    } else {
      this.usernameError = '';
    }

    this.updateLoginButtonState();
  }

  public onPasswordChange() {
    this.hasPasswordError = false;

    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>_-]/.test(this.password);

    if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChars) {
      this.hasPasswordError = true;
      this.passwordError = this.incorrectPasswordErrorMessage;
    } else if (this.password.length > 0 && this.password.length < 8) {
      this.hasPasswordError = true;
      this.passwordError = this.shortPasswordErrorMessage;
    } else if (this.password.length > 20) {
      this.hasPasswordError = true;
      this.passwordError = this.longPasswordErrorMessage;
    } else {
      this.passwordError = '';
    }

    this.updateLoginButtonState();
  }

  private updateLoginButtonState() {
    const loginButton = document.querySelector('.loginBtn');

    if (
      this.username.length >= 3 &&
      this.username.length <= 20 &&
      this.password.length >= 8 &&
      this.password.length <= 20 &&
      !this.hasUsernameError &&
      !this.hasPasswordError
    ) {
      loginButton?.removeAttribute('disabled');
    } else {
      loginButton?.setAttribute('disabled', '');
    }
  }
}
