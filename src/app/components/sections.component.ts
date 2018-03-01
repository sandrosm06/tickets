import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'sections',
	templateUrl: '../views/sections.html'
})
export class SectionsComponent{
	public title: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
		){
		this.title = 'Secciones';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
	
	onSubmit(){
		console.log("Submit");
		this._router.navigate(['/add-rows']);
	}
}