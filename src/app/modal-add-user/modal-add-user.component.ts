import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { USERS } from '../users';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css']
})
export class ModalAddUserComponent {
    id : number = 5;
    name : string = 'Joshua';
    email : string = 'joshua@user.com';
    password : string = 'JoshuaBg';
    description : string = 'Inscrit depuis 3 ans';
    newUser : USERS ={id : NaN, name : '',email : '',password : '',description : ''};
    url = "http://localhost:3000/userList";
    httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    constructor(
      private http : HttpClient, private MatDialog : MatDialog, public dialogRef : MatDialogRef<ModalComponent>){
        
    }

    
    onSubmit(form : NgForm) : Observable<USERS>{
      this.newUser = {
        "id" : form.value.id,
        "name" : form.value.name,
        "email" : form.value.email,
        "password" : form.value.password,
        "description" :form.value.description
    }
    console.log(this.newUser)
      return this.http.post<USERS>(this.url, this.newUser,this.httpOptions)       
    }

    onClose(){
        this.MatDialog.closeAll();
    }


}
