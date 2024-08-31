import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIconsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public username: string = '';
  public password: string = '';

  public shortUsernameErrorMessage: string = 'Имя пользователя слишком короткое';
  public longUsernameErrorMessage: string = 'Имя пользователя слишком длинное';

  public shortPasswordErrorMessage: string = 'Пароль слишком короткий';
  public longPasswordErrorMessage: string = 'Пароль слишком длинный';
  public incorrectPasswordErrorMessage: string = 'Пароль должен содержать цифры и буквы латинского алфавита';

  public onUsernameChange() {
    if(this.username != '' && this.password != '') {
      document.querySelector('.loginBtn')?.removeAttribute('disabled');
    } else {
      document.querySelector('.loginBtn')?.setAttribute('disabled', '');
    }

    if(this.username.length > 0 && this.username.length < 3) {
    }
  }

  public onPasswordChange() {
    if(this.username != '' && this.password != '') {
      document.querySelector('.loginBtn')?.removeAttribute('disabled');
    } else {
      document.querySelector('.loginBtn')?.setAttribute('disabled', '');
    }
  }
}
