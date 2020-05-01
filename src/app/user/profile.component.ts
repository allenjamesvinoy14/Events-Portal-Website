import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup,Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html' ,
})
export class ProfileComponent implements OnInit{

  profileForm: FormGroup;

  constructor(private authService:AuthService,private route:Router){

  }

  ngOnInit(){

    let firstName = new FormControl(this.authService.currentUser.firstName,Validators.required);
    let lastName = new FormControl(this.authService.currentUser.lastName,Validators.required);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })

  }

  cancel(){
    this.route.navigate(['/events'])
  }

  saveProfile(profileFormValue){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(profileFormValue.firstName,profileFormValue.lastName);
      this.route.navigate(['/events'])
    }
  }

}