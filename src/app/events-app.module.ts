import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { EventsAppComponent } from './events-app.component';

import {EventsListComponent} from './events/events-list.component';

import {EventThumbnailComponent} from './events/events-thumbnail.component';

import {NavBarComponent} from './nav/navbar.component';

import {EventService} from './events/shared/event.service';

import {ToastrService} from './common/toastr.service';

import {EventDetailsComponent} from './events/events-details/events-details.component';

import {appRoutes} from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
    ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
