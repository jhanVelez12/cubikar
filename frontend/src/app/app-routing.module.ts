import { CrearClientePageModule } from './home/clientes/crear-cliente/crear-cliente.module';
import { ClientesPageModule } from './home/clientes/clientes.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home',  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  {path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'clientes',
    children: [
      {
        path: "",
        loadChildren: () => import('./home/clientes/clientes.module').then(m => m.ClientesPageModule)
      },
      {
        path: "crear-cliente",
        loadChildren: () => import('./home/clientes/crear-cliente/crear-cliente.module').then(m=> m.CrearClientePageModule)
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
