import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { USERS } from '../users';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token : string = ""
  title = 'formulaire';
  userPassword : string = '';
  userEmail : string = '';
  url = 'http://localhost:8000/api/users';
  usersList: Array<USERS> = [];
  newUser : object = {};
  decrypt :any;

  
  constructor(private router : Router,public matDialog: MatDialog, private http: HttpClient) {
    fetch(this.url).then(res => res.json()).then( resJson => {
      this.usersList = resJson;
      this.usersList.forEach(element => {
        element.email = element.email.toString();
        element.password = element.password.toString();
      });
      console.log(this.usersList);
    });
  }

  onSubmitForm(form : NgForm){
    this.newUser = {
      "email" : form.value.userEmail,
      "password" : form.value.userPassword,
    }
    this.http.post("http://localhost:8000/api/login", this.newUser).subscribe((data: any) => {
      this.token = data.token;
      this.decrypt= jwt_decode(this.token)
      sessionStorage.setItem("token",this.token)
      this.router.navigate(['/dashboard'])
    });    
  }

  userList(){
    this.router.navigate(['/userList']);
  }

  addUser() {
    this.router.navigate(['/addUser'])
  }
}
