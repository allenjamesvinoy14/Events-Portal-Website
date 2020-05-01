import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()
export class AuthService{

    currentUser: IUser

    loginUser(username: string, password: string){

        //simulating a server return

        this.currentUser = {
            id: 1,
            userName: username,
            firstName: 'John',
            lastName: 'Papa'
        }


    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string,lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        //TODO: save in DB later
    }
}