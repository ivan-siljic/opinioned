import { Component, OnInit } from '@angular/core';

import { VotesService } from '../votes.service';



@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	votes;
  uniqueVotes;

  constructor(private votesService: VotesService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.votes = this.votesService.getVotes();
    this.uniqueVotes = Array.from(new Set(this.votes));
  }

}
