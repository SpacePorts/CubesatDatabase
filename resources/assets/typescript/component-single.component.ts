
//angular 2 core
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

//models

//components

//services

@Component({
    selector: 'component-single',
	templateUrl: 'templates/component-single.component.html',
    providers: [],
    directives: []
})


export class ComponentSingleComponent implements OnInit {


	constructor(private _route: Router, routeParams: RouteParams) {
	}

	ngOnInit() {
	}

}