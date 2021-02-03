import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { VotesService } from '../votes.service';

@Component({
  selector: 'votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
	votes;
  uniqueVotes;

  constructor(private votesService: VotesService, private _location: Location) { }

  	theOne(vote) {
   		this.votesService.theOne(vote);
	}

    backClicked() {
      this._location.back();
    }

    deleteVote(vote) {
      this.votesService.deleteVote(vote);
    }

  ngDoCheck(){
     this.votes = this.votesService.getVotes();
    this.uniqueVotes = Array.from(new Set(this.votes));
  }

  ngOnInit(): void {
  	 this.votes = this.votesService.getVotes();
     this.uniqueVotes = Array.from(new Set(this.votes));
  }

}
