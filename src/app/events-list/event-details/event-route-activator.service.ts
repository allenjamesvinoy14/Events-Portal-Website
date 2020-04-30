import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

//right now we are checking if the id passed in the events/:id route is valid or not
@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService,private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot){
        const eventExists = !!this.eventService.getEvent(+route.params['id']); //!! typecasts to boolean

        if(!eventExists){
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}