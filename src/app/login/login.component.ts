import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { USERS } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'formulaire';
  userPassword : string = '';
  userEmail : string = '';
  url = 'http://localhost:3000/users';
  usersList: Array<USERS> = [];
  
  constructor(private router : Router) {
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
    for(var user of this.usersList){
      //console.log(user);
      if(form.value.userPassword == user.password && form.value.userEmail == user.email){
        console.log(sessionStorage.setItem("id",user.id.toString()))
        let userId = user.id.toString();
        this.router.navigate(['/dashboard/'+userId])
        console.log("Non");
      }
    }
  }

  userList(){
    this.router.navigate(['/userList']);
  }
}
