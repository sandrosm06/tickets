import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VenueService } from '../services/venue.service';
import { Venue } from '../models/venue';
@Component({
	selector: 'add_venue',
	templateUrl: '../views/add_venue.html',
	providers: [VenueService]
})
export class AddVenueComponent{
	public title: string;
	public venue: Venue;
	public venues=[];
	public message:string;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _venueService: VenueService
		){
		this.title = 'Lugar del Evento';
		this.venue = new Venue(0,'','','','');
		//this.venues = new Venue(0,'','','','');

	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
		this.getVenues();
	}

	
	onSubmit(){
		console.log("Submit");
		this.saveVenue();
		//this._router.navigate(['/add-event');
	}

	saveVenue(){
		console.log(this.venue);

		this._venueService.saveVenue(this.venue).subscribe(
			response=>{
				if (response.code==200){
					this._router.navigate(['/add-event']);
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
	}
}