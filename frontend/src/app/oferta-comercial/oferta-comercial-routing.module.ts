import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaComercialPage } from './oferta-comercial.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaComercialPage
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaComercialPageRoutingModule {}
