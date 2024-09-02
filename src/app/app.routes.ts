import { Routes } from '@angular/router';
import { LoginComponent } from "./login-and-registration/login/login.component";
import { IntroPagesComponent } from './intro-pages/intro-pages.component';

export const routes: Routes = 
[
    { path: "", component: IntroPagesComponent},
    { path: "login", component: LoginComponent}
];
