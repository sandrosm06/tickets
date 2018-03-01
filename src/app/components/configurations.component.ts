import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
	selector: 'configurations',
	templateUrl: '../views/configurations.html'
})
export class ConfigurationsComponent{
	public title: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
		){
		this.title = 'Configuraciones';
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
	
	onSubmit(){
		console.log("Submit");
		this._router.navigate(['/sections']);
	}
}