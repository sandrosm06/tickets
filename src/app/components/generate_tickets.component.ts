import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { ConfigurationService } from '../services/configuration.service';
//import { SectionService } from '../services/section.service';
//import { RowService } from '../services/row.service';
import { GenerateService } from '../services/generate.service';
import { ExcelService } from '../services/excel.service';

import { Configuration } from '../models/configurations';
import { Section } from '../models/section';


@Component({
	selector: 'generate-tickets',
	templateUrl: '../views/generate.html',
	providers: [GenerateService, ExcelService]

})
export class GenerateTicketsComponent{
	public idEvent:number;
	public configurationSection=[];
	public rows=[];
	public message:string;
	//public isGenerated:boolean = false;
	public idGenerated=[];
	//@Input() idConfiguration:number;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _generateService: GenerateService,
		private _excelService: ExcelService
		){

	}

	ngOnInit(){
		console.log(this.idEvent);
		this.getIdEvent();
		//console.log(this.idConfiguration);
		this.getRows();
		this.getRowsGenerated();
		console.log(this.rows);
	}

	getRows(){
		this._generateService.getRows(this.idEvent).subscribe(
			result => {
				
				if(result.code = 200){
					console.log(result);
					this.rows=result.data;
				}else{
					
					this.message=result.message;
					console.log(this.message);
				}

			},
			error => {
				console.log(<any>error);
			}
		);
	}

	generarTickets(row){
		console.log(row);
		this._generateService.generateTicekts(row).subscribe(
			response=>{
				if (response.code==200){
					//this._router.navigate(['/add-sections/'+this.idEvent]);
					//this.isGenerated=true;
					this.idGenerated.push(row.idRow);
					console.log(this.idGenerated);
					//console.log(response);
					//this.isGenerated(row.idRow);
				} else {
					console.log(response);
				}

			},
			error=>{
				console.log(<any>error);
			}
		);
	}

	generarArchivo(row){
		var tickets=[];
		this._generateService.getTickets(row).subscribe(
			response=>{
				if (response.code==200){
					console.log(response.data);
					this._excelService.exportAsExcelFile(response.data,"tickets-01");
					tickets = response.data;
				} else {
					console.log(response);
				}

			},
			error=>{
				console.log(<any>error);
			}
		);

		
		
	}

	getIdEvent(){
		this._route.params.forEach((params: Params) => {
			let id = params['idEvent'];
			this.idEvent = id;
		});
	}

	isGenerated(idRow:number){
		var retorna=false;
		for (var i = 0; i < this.idGenerated.length; i++) {

			if (this.idGenerated[i] == idRow) {
				//console.log("retorna true");
				//console.log(this.idGenerated[i]);
				retorna=true;
				
			}
		}
		//console.log(retorna);
		return retorna;

	}

	isTicketsGenerated(idRow:number){
		var retorna=false;
		this._generateService.isTicketsGenerated(idRow).subscribe(
			response=>{
				if (response.code==200){
					retorna = true;
					console.log(retorna);
					
				} else {
					retorna = false;
					console.log(retorna);
				}

			},
			error=>{
				console.log(<any>error);
			}
		);
		return retorna;

	}

	getRowsGenerated(){
		this._generateService.getRowsGenerated().subscribe(
			response=>{
				if (response.code==200){
					var data = response.data;

					for(var i=0; i<data.length; i++){
						this.idGenerated.push(data[i].Rows_idRow);
					}
				} else {
					console.log(response.status);
				}

			},
			error=>{
				console.log(<any>error);
			}
		);

	}

}	