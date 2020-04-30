import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

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
    
    events:any
    constructor(private eventService: EventService,private toastrService:ToastrService){
        
    }

    //good practise to fetch data from services
    ngOnInit(){
        this.eventService.getEvents().subscribe(events=>{ this.events = events });
    }

    handleThumbnailClick(eventName){
        this.toastrService.success(eventName); //best practise to use 3rd party services
    }

}

