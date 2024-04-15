import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { CommonModule } from '@angular/common';
import { User } from '../providers/user';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
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
