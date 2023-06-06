import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-modal',
  templateUrl: './close-modal.component.html',
  styleUrls: ['./close-modal.component.css']
})
export class CloseModalComponent {
  id: any;
  name: any;
  email: any;
  password: any;
  description: any;
  url: string;
  newUser = {};
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private router : Router,private MatDialog : MatDialog,@Inject(MAT_DIALOG_DATA) public data: any,private http : HttpClient){
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.description = data.description;
    this.url = "http://localhost:8000/api/users/"+data.id
  }

  onNo(){
    this.MatDialog.closeAll()
  }

  onYes(){

    this.http.delete(this.url,this.httpOptions).subscribe(data => {
      console.log(data);
  })
    return this.router.navigate(['/login']), this.MatDialog.closeAll()
  }

}
