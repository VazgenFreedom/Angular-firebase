import { CanActivateFn } from '@angular/router';

export const subscriberGuard: CanActivateFn = (route, state) => {
  return true;
};
