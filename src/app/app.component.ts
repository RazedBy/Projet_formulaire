import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormulaireServices } from './formulaire.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'formulaire';
  usersList;
  userPassword : string = '';
  userEmail : string = '';
  
  constructor(private formulaireService : FormulaireServices){
    this.usersList = this.formulaireService.getAllUsers();
    console.log("UsersList", this.usersList)
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