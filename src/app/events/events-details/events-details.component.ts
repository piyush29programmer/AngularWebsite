import {Component} from '@angular/core'
import {EventService} from '../shared/event.service'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'
@Component({
    templateUrl:'./events-details.component.html',
    styles:[
        `
        .container {padding left:10px; padding right :10px;}
        .event-image {height :100px;}
        `
    ]
})

export class EventDetailsComponent{
    event:any
    constructor(private eventService:EventService,private route:ActivatedRoute,private routeBack:Router){

  }

    ngOnInit(){
       this.event=  this.eventService.getEvent(this.route.snapshot.params['id']);
  }

  cancel(){
      this.routeBack.navigate(['/events'])
  }
}