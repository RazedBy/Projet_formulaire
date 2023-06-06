import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { USERS } from '../users';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent {
  @Input() user !: USERS;
  usersList: Array<USERS> = [];
  url = "http://localhost:8000/api/users";
  id: any;
  name: any;
  email: any;
  password: any;
  description: any;
  ValeurFils : boolean = false;
  constructor(public matDialog: MatDialog) {
    fetch(this.url).then(res => res.json()).then(resJson => {
      this.usersList = resJson;
      this.usersList.forEach(element => {
        element.email = element.email.toString();
        element.password = element.password.toString();
      });
    });
  }

  openModal(user: any) {
    this.id = user['id'];
    this.name = user['name'];
    this.email = user['email'];
    this.password = user['password'];
    this.description = user['description'];
    this.matDialog.open(ModalComponent, {
      data: {
        id : user['id'], 
        name : user['name'],
        email : user['email'],
        password : user['password'],
        description : user['description']
      },
      width: "400px",
      position: { left: "500px", top: "-90px" },
      height: "400px",
      id: "modal-component",
      disableClose: true
    });

      
    
  }
}
