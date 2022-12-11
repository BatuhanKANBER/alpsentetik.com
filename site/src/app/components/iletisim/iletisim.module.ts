import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IletisimRoutingModule } from './iletisim-routing.module';
import { IletisimComponent } from './iletisim/iletisim.component';


@NgModule({
  declarations: [
    IletisimComponent
  ],
  imports: [
    CommonModule,
    IletisimRoutingModule
  ],
  exports:[
    IletisimComponent
  ]
})
export class IletisimModule { }
