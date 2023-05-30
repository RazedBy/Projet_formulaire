import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalAddUserComponent } from '../modal-add-user/modal-add-user.component';
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
  url = 'http://localhost:3000/userList';
  usersList: Array<USERS> = [];
  
  constructor(private router : Router,public matDialog: MatDialog) {
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

  addUser() {
    this.router.navigate(['/addUser'])
    // this.matDialog.open(ModalAddUserComponent, {
    //   width: "400px",
    //   position: { left: "500px", top: "-90px" },
    //   height: "400px",
    //   id: "modal-component",
    //   disableClose: true
    // });
  }
}
