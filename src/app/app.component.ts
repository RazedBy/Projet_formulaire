import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { USERS } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'formulaire';
  userPassword : string = '';
  userEmail : string = '';
  url = 'http://localhost:3000/users';
  usersList: Array<USERS> = [];
  
  constructor() {
    fetch(this.url).then(res => res.json()).then( resJson => {
      this.usersList = resJson;
      console.log(this.usersList);
    });
  }

  onSubmitForm(form : NgForm){
    /*for(var user of this.usersList){
      console.log(user);
      if(form.value.userPassword == user.password && form.value.userEmail == user.email){
        console.log("Yes")
      }else{
        console.log("Non");
      }
    }*/
  }
}