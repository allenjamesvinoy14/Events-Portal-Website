import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-list',
    template: `<div>
                    <h1> Upcoming Angular Events </h1>
                    <hr/>
                    <div class="row">
                        <div *ngFor="let event of events" class="col-md-5">
                            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
                        </div>
                    </div>
                </div>` 
})

//$event is mandatory while passing information from the child component to the parent componenet
export class EventsListComponent implements OnInit{
    
    events:IEvent[]
    
    constructor(private eventService: EventService,private toastrService:ToastrService,private route: ActivatedRoute){
        
    }

    //good practise to fetch data from services
    ngOnInit(){
        this.events = this.route.snapshot.data['events']; // events name is the same as the one in the route
    }

    handleThumbnailClick(eventName){
        this.toastrService.success(eventName); //best practise to use 3rd party services
    }

}

