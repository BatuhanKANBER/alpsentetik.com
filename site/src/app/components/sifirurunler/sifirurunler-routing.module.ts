import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SifirurunlerComponent } from './sifirurunler/sifirurunler.component';

const routes: Routes = [
  {path:'', component: SifirurunlerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SifirurunlerRoutingModule { }
