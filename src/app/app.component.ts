import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { USERS } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  url = 'http://localhost:3000/users';
  usersList: Array<USERS> = [];

  constructor(private router : Router) {

    //Récupérations des données de la bdd.json

    fetch(this.url).then(res => res.json()).then( resJson => {
      this.usersList = resJson;
      this.usersList.forEach(element => {
        element.email = element.email.toString();
        element.password = element.password.toString();
      });
      this.checkIfLogged(this.usersList);
    });


  }
  //Vérifications qu'un utilisateur se soit pas déjà loggin dans le Session Storage et vérification que l'id de l'utilisateur existe bien
  checkIfLogged(usersList : Array<USERS>){
    if(window.sessionStorage.getItem('id')){
      for (var i = 0; i < this.usersList.length;i++){
        if (this.usersList[i]['id'].toString() == sessionStorage.getItem("id")) {
          this.router.navigate(['/dashboard/'+usersList[i]['id']]);
      }
    }
    }else{
      this.goToLogin();
    }
  }
  goToLogin(){
    this.router.navigateByUrl('login');
  }
}