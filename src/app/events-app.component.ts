import { Component } from '@angular/core';

@Component({
  selector: 'events-app', //should be the name in index.html instead of app-root which is default
  template: `
            <nav-bar></nav-bar>
            <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
