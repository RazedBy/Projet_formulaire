import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
    name : string = '';
    email : string = '';
    password : string = '';
    description : string = '';
    newUser = { name : '',email : '',password : '',description : ''};
    url = "http://localhost:8000/api/users";
    httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    constructor(
      private http : HttpClient,private router : Router){
        
    }

    
    onSubmit(form : NgForm){
      this.newUser = {
        "name" : form.value.name,
        "email" : form.value.email,
        "password" : form.value.password,
        "description" :form.value.description
    }
    console.log(this.newUser)
      this.http.post(this.url,this.newUser,this.httpOptions).subscribe(data => {
          console.log(data);
      })
      return this.router.navigate(['/login'])
    }


    onClose(){
      this.router.navigate(['/login'])
    }
  }


    



