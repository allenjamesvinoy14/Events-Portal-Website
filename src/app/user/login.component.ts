import { Component } from '@angular/core'; 
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(private authService:AuthService,private route:Router){

    }

    login(formValues){
        this.authService.loginUser(formValues.userName,
            formValues.password);

        if(this.authService.isAuthenticated()){
            this.route.navigate(['/events']);
        }
        else{
            window.alert("Wrong User Credentials!");
        }
    }
}