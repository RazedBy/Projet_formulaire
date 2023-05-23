import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'formulaire';
  url = 'http://localhost:3000/users';

  userEmail : string = '';
  userPassword : string =  '';

  onSubmitForm(form : NgForm){
    console.log(form.value);
  }
}