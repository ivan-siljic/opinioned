import { Component, OnInit } from '@angular/core';
import { General } from '../general';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	general = General;

  constructor() { }

  ngOnInit(): void {
  }

}
