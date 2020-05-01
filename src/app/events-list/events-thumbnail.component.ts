import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    template: `<div [routerLink] = "['/events',event.id]" class = "well hoverwell thumbnail">
                    <h2>{{event?.name | uppercase }}</h2>
                    <div>Date: {{event?.date | date}}</div>
                    <div>Time: {{event?.time}}</div>
                    <div [ngClass]="getStartTimeClass()" [ngSwitch] = "event?.time"> 
                        <span *ngSwitchCase = "'8:00 am'">Early Start!</span>
                        <span *ngSwitchCase = "'10:00 am'">Late Start!</span>
                        <span *ngSwitchDefault>Normal Start!</span>
                    </div>
                    <div>Price: {{event?.price | currency:'INR'}}</div>
                    <div *ngIf="event?.location"> 
                        <span>Location: {{event?.location?.address}}</span>
                        <span>&nbsp;</span>
                        <span>{{event?.location?.city}},{{event?.location?.country}}</span>
                    </div>
                    <div *ngIf="event?.onlineURL">
                        Online URL: {{event?.onlineURL}}
                    </div>
                </div>`,
    styles: [`
        .green {color: green !important; }
        .bold {font-weight: bold; }
        .thumbnail { min-height : 210px; }
        .well div{
            color: #bbb;
        }
    `]
})

export class EventsThumbnailComponent{
    @Input() event:IEvent //any refers to variable type

    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold:isEarlyStart};

        /* alternate way 
            if(this.event && this.event.time === '8:00 am') return 'green bold';
            return ''
        */
    }
}