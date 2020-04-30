import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './events-list/event-details/event-details.component';
import { CreateEventComponent } from './events-list/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events-list/event-details/event-route-activator.service';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,canDeactivate: ['canDeactivateCreateEvent']}, //function also can be passed
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent,canActivate: [EventRouteActivator]}, // a route guard is added
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full' } //default path
]