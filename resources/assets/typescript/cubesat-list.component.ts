
//angular 2 core
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

//models
import {Satellite} from "./models/satellite";
import {Pagination} from "./models/pagination";

//components
import {PaginationComponent} from './pagination.component';

//services
import {SatelliteService} from "./services/satellite-service";

@Component({
    selector: 'cubesat-list',
	templateUrl: 'templates/cubesat-list.component.html',
    providers: [SatelliteService],
    directives: [PaginationComponent]
})


export class CubesatListComponent implements OnInit { 

	sat_pageination: Pagination<Satellite>;
	errorMessage: string;
	private page: number = 0;

	constructor(private _satellite_service: SatelliteService, private _route: Router, routeParams : RouteParams) { 
		this.sat_pageination = null;
		this.page = +routeParams.get('page');
	}


	ngOnInit()
	{ 

		//retrieve satellites
		this._satellite_service.getSatellites(this.page).subscribe(
			sats => this.sat_pageination = sats,
			error => this.errorMessage = <any>error);
	}

	private onPageChange(page: number)
	{
		this.page = page;
		this.updateList();
	}

	private updateList()
	{
		this._route.navigate(['CubesatList', { page: this.page }]);
	}
	
}