import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesListComponent } from './pages-list/pages-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-firebase';
}
