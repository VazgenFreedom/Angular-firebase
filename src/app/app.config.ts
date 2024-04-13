import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { App_Routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(App_Routes)],
};
