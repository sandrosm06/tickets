import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Venue } from '../models/venue';
import { GLOBAL } from './global';


@Injectable()
export class VenueService{
	public url: string;

	constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
	}

	getVenues(){
		return this._http.get(this.url+'get-venues').map(res => res.json());
	}

	saveVenue(venue: Venue){
		//console.log(contactoProveedor);
		let json = JSON.stringify(venue);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'save_venue', params, {headers: headers})
						 .map(res => res.json());
	}
}