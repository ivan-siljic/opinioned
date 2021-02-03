import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VotesService {

votes:any = [];
one:String = '';
category:String = '';

  constructor() { }

 agreed(opinion) {
   this.votes.push(opinion);
 }

 getVotes() {
   return this.votes;
 }

 deleteVote(vote) {
    const index: number = this.votes.indexOf(vote);
    if (index !== -1) {
        this.votes.splice(index, 1);
        this.one = '';
    }        
}


 theOne(vote) {
   this.one = vote;
 }

 getTheOne() {
   return this.one;
 }

 catFilt(category) {
    this.category = category;
  }

}
