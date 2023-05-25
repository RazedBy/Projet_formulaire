import { Component, Inject, Input, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { USERS } from '../users';
import { UserListComponent } from '../user-list/user-list.component';
@Component({
	selector: 'ngbd-modal-basic',
	standalone: true,
	imports:[],
	templateUrl: './modal.component.html',
})


export class ModalComponent {
	usersList : Array<USERS> = [];
	user= {};
	url = "http://localhost:3000/users"
	id : any;
	name : any;
	email : any;
	password : any;
	description : any;

	constructor(private MatDialog : MatDialog, public dialogRef : MatDialogRef<ModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any){
		fetch(this.url).then(res => res.json()).then( resJson => {
			this.usersList = resJson;
			this.usersList.forEach(element => {
			  element.email = element.email.toString();
			  element.password = element.password.toString();
			});
		  });

		  this.id = data.id;
		  this.name = data.name;
		  this.email = data.email;
		  this.password = data.password;
		  this.description = data.description;
	}



	closeModal(){
		this.MatDialog.closeAll()
	}
}