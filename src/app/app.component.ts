import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesListComponent } from './pages-list/pages-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppNavbarComponent } from './admin-page/front-page/app-navbar/app-navbar.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PagesListComponent,
    LoginPageComponent,
    MatButtonModule,
    AppNavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-firebase';
}
