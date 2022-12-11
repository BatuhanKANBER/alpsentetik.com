import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SifirurunlerRoutingModule } from './sifirurunler-routing.module';
import { SifirurunlerComponent } from './sifirurunler/sifirurunler.component';
import { SifirUrunlerService } from './services/sifirurunler.services';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SifirurunlerComponent
  ],
  imports: [
    CommonModule,
    SifirurunlerRoutingModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    FormsModule
  ],
  exports:[
    SifirurunlerComponent
  ],
  providers: [SifirUrunlerService]
})
export class SifirurunlerModule { }
