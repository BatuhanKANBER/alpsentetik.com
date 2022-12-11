import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app-main.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: AppMainComponent,
      children:[
        {
          path: '',
          loadChildren: () =>
            import('../../src/app/components/anasayfa/anasayfa.module').then(
              (m) => m.AnasayfaModule
            ),
        },
        {
          path: 'home',
          loadChildren: () =>
            import('../../src/app/components/anasayfa/anasayfa.module').then(
              (m) => m.AnasayfaModule
            ),
        },
        {
          path: 'products',
          loadChildren: () =>
            import('../../src/app/components/sifirurunler/sifirurunler.module').then(
              (m) => m.SifirurunlerModule
            ),
        },
        {
          path: 'about',
          loadChildren: () =>
            import('../../src/app/components/hakkimizda/hakkimizda.module').then(
              (m) => m.HakkimizdaModule
            ),
        },
        {
          path: 'contact',
          loadChildren: () =>
            import('../../src/app/components/iletisim/iletisim.module').then(
              (m) => m.IletisimModule
            ),
        }

      ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
