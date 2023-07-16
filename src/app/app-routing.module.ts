import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppModules} from "./routing/app-modules";

const routes: Routes = [
  {
    path: AppModules.nombreModulo.id,
    loadChildren: () => import('./modules/nombre-modulo/nombre-modulo.module').then(m => m.NombreModuloModule)
  },
  {
    path: AppModules.nosotros.id,
    loadChildren: () => import('./modules/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: AppModules.contactanos.id,
    loadChildren: () => import('./modules/contacto/contacto.module').then(m => m.ContactoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
