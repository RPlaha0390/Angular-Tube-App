import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
	
@Injectable()

export class TubeService {
	constructor(private http: Http) {}
	
	getTubeList() {
		return this.http.get('https://api.tfl.gov.uk/line/mode/tube/status')
	}
} 