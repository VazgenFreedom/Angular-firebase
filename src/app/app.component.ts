import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesListComponent } from './pages-list/pages-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PagesListComponent,
    LoginPageComponent,
    AppNavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-firebase';
}
