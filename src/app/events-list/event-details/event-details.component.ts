//we will naviagate to this page using a URL and it will be of the format /events/1

import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        `
    ]
})
export class EventDetailsComponent implements OnInit{

    event:IEvent
    filterBy:string = 'all'

    constructor(private eventService: EventService,private route:ActivatedRoute){

    }

    ngOnInit(){
        //this.event = this.eventService.getEvent(+this.route.snapshot.params['id']); // this contains a bug

        /*  BUG #1:
            When we search for a term in the search bar,
            Multiple sessions of various events are displayed. 
            It means that When I click on a session of event A, and then click on a session of event B, it doesn't re-route
        */

        // SOLUTION #1:
        
        // One way to subscribe to any change in parameters
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id'])

            //also important to keep track of state variables and reset it

            this.resetState()
        }) 

    }

    resetState(){
        this.filterBy = 'all';
    }
    
}