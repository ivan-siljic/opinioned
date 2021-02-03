import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { General } from '../general';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
fixed;

  constructor(private route: ActivatedRoute, private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
   	this.fixed = General[+params.get('fixedId')];
  	});
  }

}
