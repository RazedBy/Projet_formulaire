import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})

export class EditModalComponent {
  
  newUser : object = {};
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  id : any;
	name : any;
	email : any;
	password : any;
	description : any;
  url : any
  constructor(
    private http : HttpClient,private router : Router,private MatDialog : MatDialog,@Inject(MAT_DIALOG_DATA) public data: any){
      console.log(data)
      this.id = data.id;
		  this.name = data.name;
		  this.email = data.email;
		  this.password = data.password;
		  this.description = data.description;
      this.url = "http://localhost:3000/userList/"+data.id
  }
  
    onSubmitForm(form : NgForm){
      this.newUser = {
        "name" : form.value.name,
        "email" : form.value.email,
        "password" : form.value.password,
        "description" :form.value.description
    }
      this.http.put(this.url,this.newUser,this.httpOptions).subscribe(data => {
          console.log(data);
      })
      return this.router.navigate(['/userList']), this.MatDialog.closeAll()

    }

    onClose(){
      console.log(this.url)
     this.MatDialog.closeAll()

    }
}
