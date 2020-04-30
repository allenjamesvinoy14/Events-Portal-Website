import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-list/events-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events-list/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events-list/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events-list/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events-list/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
              ToastrService,
              EventRouteActivator,
              {
                provide: 'canDeactivateCreateEvent',
                useValue: checkUnsaved
              }
              ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

//by default the parameter of the component is passed! 

export function checkUnsaved(component: CreateEventComponent){
  if(component.isUnsaved) return window.confirm('You have not saved. Sure you want to cancel?');
  return true;
}
