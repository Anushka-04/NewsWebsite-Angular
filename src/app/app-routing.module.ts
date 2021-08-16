import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './components/topheading/topheading.component';
import { TechnewsComponent } from './components/technews/technews.component';
import { SportsComponent } from './components/sports/sports.component';
import { EntnewsComponent } from './components/entnews/entnews.component';

const routes: Routes = [
{path:'',component:TopheadingComponent},
{path:'tech',component:TechnewsComponent},
{path:'sports',component:SportsComponent},
{path:'ent',component:EntnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
