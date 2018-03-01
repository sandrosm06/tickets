import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VenueService } from '../services/venue.service';
import { Venue } from '../models/venue';
@Component({
	selector: 'venues',
	templateUrl: '../views/venues.html',
	providers: [VenueService]
})
export class VenuesComponent{
	public title: string;
	//public venue: Venue;
	public venues=[];
	public message:string;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _venueService: VenueService
		){
		this.title = 'Lugar del Evento';
		//this.venue = new Venue(0,'','','','');
		//this.venues = new Venue(0,'','','','');

	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
		this.getVenues();
	}

	
	getVenues(){
		this._venueService.getVenues().subscribe(
			response => {
				if(response.code == 200){
					this.venues = response.data;
					console.log(this.venues);
				}else{
					this.message="no se ha encontrado configuraciones";
					console.log(this.message);
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
	onDeleteRow(idVenue:number){
		console.log(idVenue);
	}
	addEvent(idVenue:number){
		console.log(idVenue);
		this._router.navigate(['/add-event/'+idVenue]);
	}
	addNewVenue(){
		this._router.navigate(['/add-venue/']);
	}
}