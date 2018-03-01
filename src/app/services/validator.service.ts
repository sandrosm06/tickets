import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()
export class ValidatorService{
	public url: string;

	constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
	}

	getTickerInformation(){
		//return this._http.get(this.url+'get-event').map(res => res.json());
	}
	

	validate(qrCode: string){
		console.log(qrCode);
		/*let json = JSON.stringify(qrCode);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'validar', params, {headers: headers})
						 .map(res => res.json());*/

		return this._http.get(this.url+'validar/'+qrCode).map(res => res.json());				 
	}
}