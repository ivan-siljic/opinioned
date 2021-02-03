import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { VotesComponent } from './votes/votes.component';
import { GeneralComponent } from './general/general.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{
	path: "", 
	component: HomeComponent
},
{
	path: "feed", 
	component: FeedComponent
},
{
	path: "votes", 
	component: VotesComponent
},
{
	path: "general/:fixedId", 
	component: GeneralComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
