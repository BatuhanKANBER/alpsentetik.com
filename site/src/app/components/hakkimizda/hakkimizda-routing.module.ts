import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';

const routes: Routes = [
  { path: '', component: HakkimizdaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HakkimizdaRoutingModule { }
