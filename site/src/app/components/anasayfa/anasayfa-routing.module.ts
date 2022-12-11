import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';

const routes: Routes = [
  {path:'',component:AnasayfaComponent},
  {path:'home',component:AnasayfaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnasayfaRoutingModule { }
