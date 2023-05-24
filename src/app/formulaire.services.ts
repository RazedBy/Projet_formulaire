import { Injectable } from "@angular/core";
import { USERS } from "./users";

@Injectable({
    providedIn: 'root'
  })

export class FormulaireServices {
    url = 'http://localhost:3000/users';
    async getAllUsers(){
        await fetch(this.url).then(res => res.json()).then( resJson => {
            console.log(resJson);
            return resJson;

        });
       
      }
    
      
}