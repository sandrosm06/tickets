import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';

@Component({
	selector: 'add_event',
	templateUrl: '../views/add_event.html',
	providers: [EventService]

})
export class AddEventComponent{
	public title: string;
	public event: Event;
	public idVenue: number;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _eventService: EventService
		){
		this.title = 'Nuevo Evento';
		this.event = new Event(0,'','','',0);
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
		this.getIdVenue();
		this.event.Venue_idVenue=this.idVenue;
	}
	
	
	onSubmit(){
		console.log("Submit");
		this.saveEvent();
		//this._router.navigate(['/configurations');
	}

	saveEvent(){
		console.log(this.event);

		this._eventService.saveEvent(this.event).subscribe(
			response=>{
				if (response.code==200){
					this._router.navigate(['/add-configurations/'+response.id.ID]);
					console.log("response");
				} else {
					console.log(response);
				}

			},
			error=>{
				console.log(<any>error);
			}
		);
	}

	getIdVenue(){
		this._route.params.forEach((params: Params) => {
			let id = params['idVenue'];
			this.idVenue = id;
		});
	}
}