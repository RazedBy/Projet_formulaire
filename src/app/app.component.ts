import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { USERS } from './users';
import { MatDialog } from  '@angular/material/dialog';
import jwt_decode from 'jwt-decode';
import { InjectionToken, NgModule } from "@angular/core";

export const JWT_OPTIONS = new InjectionToken('JWT_OPTIONS');

const jwtOptions = {
  // Options de configuration JWT
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router : Router) {
      this.checkIfLogged();
  }
  //Vérifications qu'un utilisateur se soit pas déjà loggin dans le Session Storage et vérification que l'id de l'utilisateur existe bien
  checkIfLogged(){
    if(window.sessionStorage.getItem('token')){
      const token = sessionStorage.getItem('token');
      if (token !== null) {
      const decode : any = jwt_decode(token);
      console.log(decode)
      this.router.navigate(['/dashboard']);
      }
    }else{
      this.goToLogin();
    }
  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }

  
}