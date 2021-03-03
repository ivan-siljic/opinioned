import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VotesService {

votes:any = [];
one:String = '';
category:String = '';

  constructor() { }

 agreeOpinion(opinion) {
   this.votes.push(opinion);
 }

 fetchVotes() {
   return this.votes;
 }

 deleteVote(vote) {
    const index: number = this.votes.indexOf(vote);
    if (index !== -1) {
        this.votes.splice(index, 1);
        this.one = '';
    }        
}

 selectTheOne(vote) {
   this.one = vote;
 }

 fetchTheOne() {
   return this.one;
 }

 filterCategory(category) {
    this.category = category;
  }

}
