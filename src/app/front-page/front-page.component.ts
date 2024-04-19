import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from '../admin-page/app-navbar/app-navbar.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [
    RouterModule,
    AppNavbarComponent,
    PagesListComponent,
    HomePageComponent,
  ],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css',
})
export class FrontPageComponent {}
