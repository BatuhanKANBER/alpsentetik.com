import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IletisimComponent } from './iletisim/iletisim.component';

const routes: Routes = [
  {path:'',component:IletisimComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IletisimRoutingModule { }
