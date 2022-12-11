import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HakkimizdaRoutingModule } from './hakkimizda-routing.module';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';


@NgModule({
  declarations: [
    HakkimizdaComponent
  ],
  imports: [
    CommonModule,
    HakkimizdaRoutingModule
  ],
  exports: [
    HakkimizdaComponent
  ]
})
export class HakkimizdaModule { }
