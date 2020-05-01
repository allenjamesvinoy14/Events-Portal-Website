//we will naviagate to this page using a URL and it will be of the format /events/1

import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
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
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']); 
        /*TODO:
            1. We could pass the JSON EventRouteActivator get while checking as an optimisation
        */
    }

}