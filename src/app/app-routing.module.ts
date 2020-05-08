import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultTableComponent } from './components/result-table/result-table.component'
import { AppComponent } from './app.component';


const routes: Routes = [
{
  path: 'flightList',
  component: ResultTableComponent
},
{
   path: '**',
    redirectTo:''
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
