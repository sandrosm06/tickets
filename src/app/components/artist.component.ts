import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'artist',
	templateUrl: '../views/artist.html'
})
export class ArtistComponent{
	public title: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
		){
		this.title = 'Artistas';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
	
	onSubmit(){
		console.log("Submit");
		this._router.navigate(['/home']);
	}
}