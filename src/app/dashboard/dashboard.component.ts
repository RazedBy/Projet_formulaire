import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  url = 'http://localhost:3000/users';
  usersList: Array<USERS> = [];
  user : USERS = {id : NaN, email : '', password : ''};
  constructor(private router: Router) {

    //Récupérations des données de la bdd.json

    fetch(this.url).then(res => res.json()).then(resJson => {
      this.usersList = resJson;
      this.user = this.usersList[Number(sessionStorage.getItem('id'))]
    
    });
    


  }

  loggout(){
    sessionStorage.removeItem("id");
    this.router.navigate(['/login']);
  }
}
