import {Component} from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events-list/shared/event.model';
import { EventService } from '../events-list/shared/event.service';

@Component({
    selector : 'nav-bar',
    templateUrl : './navbar.component.html',
    styles: [
        `nav.navbar-nav {font-size: 15px}
        #searchForm {margin-right: 100px}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924; }` // to hide the search bar if the window gets too small
    ]
})
export class NavbarComponent{

    searchTerm:string = "";
    foundSessions: ISession[];

    constructor(private authService:AuthService,private eventService:EventService){
        
    }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                console.log(this.foundSessions);
            }
        )
    }

}