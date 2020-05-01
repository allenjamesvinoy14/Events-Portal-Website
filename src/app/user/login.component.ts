import { Component } from '@angular/core'; 
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    mouseoverLogin:boolean

    constructor(private authService:AuthService,private route:Router){

    }

    login(formValues){
        this.authService.loginUser(formValues.userName,
            formValues.password); // Notice the same name given in the (ngModel) binding

        if(this.authService.isAuthenticated()){
            this.route.navigate(['/events']);
        }
        else{
            window.alert("Wrong User Credentials!");
        }
    }

    cancel(){
        this.route.navigate(['/events']);
    }
}