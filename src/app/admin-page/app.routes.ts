import { Routes } from '@angular/router';
import { PagesListComponent } from './pages-list/pages-list.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { adminGuard } from './guards/admin.guard';
import { subscriberGuard } from './guards/subscriber.guard';

export const App_Routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'article',
    component: PagesListComponent,
    canActivate: [subscriberGuard],
  },
  {
    path: 'admin',
    loadChildren: 'app/admin-page/admin-page.module#AdminPageModule',
    canActivate: [adminGuard],
  },
];
