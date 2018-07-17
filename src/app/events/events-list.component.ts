import {Component, OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import { ToastrService } from '../common/toastr.service';
import {Router} from '@angular/router'
declare let toastr

@Component({
   // selector:'events-list',
    template:`
    <div>
    <h1>
        Upcoming Angular Connect
    </h1>
    <hr/>
    <div class='row'>
        <div *ngFor='let event of events' class='col-md-5'>
            <event-thumbnail  [event]='event' (click)="handleOnClick(event.name)" ></event-thumbnail> 
        </div>
    </div>
   
</div>
    `
})

export class EventsListComponent implements OnInit{
    events:any[]

   constructor(private eventService:EventService,
    private toastrService:ToastrService,private router:Router){
       
   }
   ngOnInit(){
     this.events=this.eventService.getEvents()
   }

   handleOnClick(eventName){
      this.toastrService.success(eventName);
   }
    
   cancel(){
    this.router.navigate(['/events'])
}
}