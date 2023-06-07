import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../users';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  usersList: Array<USERS> = [];
  user: USERS = { id: NaN, email: '', password: '', name: '', description: '' };
  decode: any;

  constructor(private router: Router) {
    interface TokenData {
      id: number;
      description: string;
      name: string;
    }

    //* Récupérations des données du token
    const token = sessionStorage.getItem('token');
    if (token !== null) {
      const decode: TokenData = jwt_decode(token) as TokenData;
      this.user.id = decode.id;
      this.user.description = decode.description;
      this.user.name = decode.name;
    }
  }

  loggout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
