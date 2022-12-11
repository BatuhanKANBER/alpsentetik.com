import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnasayfaRoutingModule } from './anasayfa-routing.module';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';


@NgModule({
  declarations: [
    AnasayfaComponent
  ],
  imports: [
    CommonModule,
    AnasayfaRoutingModule
  ],
  exports:[
    AnasayfaComponent
  ]
})
export class AnasayfaModule { }
