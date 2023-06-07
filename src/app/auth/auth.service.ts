import { Injectable } from "@angular/core";

@Injectable({
    providedIn :'root'
})

export class AuthService {
    private token!: any


    getToken() : any {
        this.token = sessionStorage.getItem('token')
        return this.token
    }
}