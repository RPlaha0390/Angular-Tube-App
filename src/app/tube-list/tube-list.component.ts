import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TubeService } from './tube-list.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-tube-list',
  templateUrl: './tube-list.component.html',
  styleUrls: ['./tube-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TubeListComponent implements OnInit {
	tubeData: {};
  showTubes: boolean = false;

  constructor(private tubeService: TubeService) {}

  onGetTubeList() {
  	this.tubeService.getTubeList()
  		.subscribe(
  			(response: Response) => {
          this.tubeData = response.json();
          console.log(this.tubeData)
        },
  			error => console.log(error)
  		);
  }

  showTubeStatus() {
    if (this.showTubes == false) {
      this.showTubes = true;
    } else {
      this.showTubes = false;
    }
  }

  ngOnInit() {
  	this.onGetTubeList();
  }

}
