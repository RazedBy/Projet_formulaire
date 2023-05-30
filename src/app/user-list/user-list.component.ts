import { Component } from '@angular/core';
import { USERS } from '../users';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  usersList: Array<USERS> = [];
  url = "http://localhost:3000/userList";
  constructor(public matDialog: MatDialog) {
    fetch(this.url).then(res => res.json()).then(resJson => {
      this.usersList = resJson;
      this.usersList.forEach(element => {
        element.email = element.email.toString();
        element.password = element.password.toString();
      });
    });
  }
}
