import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { VotesService } from '../votes.service';
import { FilterPipe } from '../filter.pipe';
import { HighlightPipe } from '../highlight.pipe';
import { General } from '../general';


@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})

export class FeedComponent implements OnInit {
  
	general = General;
  opinions = [];
	opinion;
	one;
	searchText = '';
  errorMessage;

  constructor(private votesService: VotesService, private http: HttpClient) {
  }

	agreed(opinion) {
   		this.votesService.agreed(opinion);
 	}

  clearSearch() {
    this.searchText = '';
  }

  api(category='Culture') {

    const headers = { 'Authorization': 'KFz4A9VFkbCHpPAcFj5AV1ZF1WUfAXyQ' }

// https://cors-anywhere.herokuapp.com/

    this.http.get<any>('https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=headline%2C%20snippet%2C%20web_url%2Cnews_desk%2Cpub_date&fq=news_desk%3A(%22'+ category +'%22)&q=opinion&api-key=KFz4A9VFkbCHpPAcFj5AV1ZF1WUfAXyQ').subscribe({
      next: data => {
          this.opinions = data.response.docs;
          console.log(this.opinions);
      },
      error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });    
  }

  ngDoCheck(){
    this.one = this.votesService.getTheOne();
  }

  ngOnInit(): void {
    this.api();
  	this.one = this.votesService.getTheOne();

    
    
  }

  }
