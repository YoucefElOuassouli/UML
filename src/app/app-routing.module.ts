import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainvoyageComponent } from './trainvoyage/trainvoyage.component';

const routes: Routes = [
  {
    path: 'VoyagesList',
    component:TrainvoyageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
