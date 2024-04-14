export interface User {
  uid: any;
  email: any;
  displayName: any;
  photoURL: any;
  roles: Roles;
}

export interface Roles {
  subscriber?: boolean;
  admin?: boolean;
}
