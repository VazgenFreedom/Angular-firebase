import { Routes } from '@angular/router';
import { PagesListComponent } from './pages-list/pages-list.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const App_Routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'article', component: PagesListComponent },
  { path: 'admin', component: AdminPageComponent },
];
