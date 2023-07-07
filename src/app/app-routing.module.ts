import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppModules} from "./routing/app-modules";

const routes: Routes = [
  {
    path: AppModules.nombreModulo.id,
    loadChildren: () => import('./modules/nombre-modulo/nombre-modulo.module').then(m => m.NombreModuloModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
