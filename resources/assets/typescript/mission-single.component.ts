
//angular 2 core
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

//models

//components

//services

@Component({
    selector: 'mission-single',
	templateUrl: 'templates/mission-single.component.html',
    providers: [],
    directives: []
})


export class MissionSingleComponent implements OnInit { 


	constructor( private _route: Router, routeParams : RouteParams) { 
	}

	ngOnInit() { 
	}
	
}