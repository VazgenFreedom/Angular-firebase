import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { CommonModule } from '@angular/common';
import { User } from '../providers/user';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
//import { MenusService } from '../../service/menus/menus.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatButton,
    MatMenuModule,
    MatToolbarModule,
  ],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css',
})
export class AppNavbarComponent {
  user!: User;

  constructor(public AfService: AfService) {}
  ngOnInit() {
    this.AfService.user$.subscribe((user) => (this.user = user!));
  }
}
