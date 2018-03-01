import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ValidatorService } from '../services/validator.service';

import * as _ from 'lodash';    

@Component({
	selector: 'validador',
	templateUrl: '../views/validador.html',
	providers: [ValidatorService]

})
export class ValidatorComponent{
	public message:string;
	public qrCode:string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _validatorService: ValidatorService
		){
		this.message = "Esperando Ticket";
	}

	getTicketInformation(){
		
	}

	ngOnInit(){
		
		this._route.params.forEach((params: Params) => {
			let id = params['qrCode'];
			this.qrCode = id;
		});
		console.log(this.qrCode);

		this.validador(this.qrCode);
	
	}

	validador(qrCode:string){
		this._validatorService.validate(qrCode).subscribe(
			response => {
				if(response.code == 200){
					this.message = "Ticker OK";
				}else{
					this.message="no se ha encontrado ticket o ya ingresado";
					console.log(this.message);
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}