import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user = {name: 'dank'};

  constructor() { }

  isLoggedIn: false;

}
