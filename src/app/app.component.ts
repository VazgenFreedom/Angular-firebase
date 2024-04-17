import { Component } from '@angular/core';
import { AppNavbarComponent } from './admin-page/app-navbar/app-navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { FrontPageComponent } from './front-page/front-page.component';
import { PagesListComponent } from './front-page/pages-list/pages-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PagesListComponent,
    MatButtonModule,
    AppNavbarComponent,
    FrontPageComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-firebase';
}
