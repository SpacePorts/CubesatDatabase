import {Injectable} from 'angular2/core';

@Injectable()
export class Mission {
	public id: number;
	public objective : string;
	public wiki : string;
	public name : string;
	public content : string;

	constructor() {
		// code...
	}


}