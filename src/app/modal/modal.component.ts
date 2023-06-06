import { Component, Inject, Injectable, Input, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { USERS } from '../users';
import { CloseModalComponent } from '../close-modal/close-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
@Component({
	selector: 'ngbd-modal-basic',
	standalone: true,
	imports:[],
	templateUrl: './modal.component.html',
})

export class ModalComponent {
	usersList : Array<USERS> = [];
	user= {};
	url = "http://localhost:8000/api/users"
	id : any;
	name : any;
	email : any;
	password : any;
	description : any;

	constructor(private MatDialog : MatDialog, public dialogRef : MatDialogRef<ModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any){
		  this.id = data.id;
		  this.name = data.name;
		  this.email = data.email;
		  this.password = data.password;
		  this.description = data.description;
	}



	closeModal(){
		this.MatDialog.closeAll()
	}
	openDeleteModal(){
		this.MatDialog.open(CloseModalComponent, {
			data: {
				id : this.id, 
			},
			width: "600px",
			position: { left: "425px", top: "-250px" },
			height: "200px",
			id: "modal-delete",
			disableClose: true
		  });
	}

	openEditModal(){
		this.MatDialog.open(EditModalComponent,{
			data: {
				id : this.id, 
				name : this.name,
				email : this.email,
				password : this.password,
				description : this.description
			  },
			width: "400px",
			position: { left: "500px", top: "-400px" },
			height: "400px",
			id: "modal-edit",
			disableClose: true
		})
	}


}