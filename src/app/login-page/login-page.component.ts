import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  constructor(public AfService: AfService) {}
  ngOnInit(): void {}
  login() {
    this.AfService.loginWithGoogle();
  }
}
