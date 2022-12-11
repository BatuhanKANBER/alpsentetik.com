import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SifirurunlerModule } from './components/sifirurunler/sifirurunler.module';
import { AnasayfaModule } from './components/anasayfa/anasayfa.module';
import { IletisimModule } from './components/iletisim/iletisim.module';
import { HakkimizdaModule } from './components/hakkimizda/hakkimizda.module';
import { MatIconModule } from '@angular/material/icon';
import { AppMainComponent } from './app-main.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AppMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SifirurunlerModule,
    AnasayfaModule,
    IletisimModule,
    HakkimizdaModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
