import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterUtils} from "../../../shared/model/routing/router-utils";
import {NombreModuloRoutes} from "./routing/nombre-modulo-routes";
import {NombreComponenteComponent} from "./components/nombre-componente/nombre-componente.component";

const routes: Routes = [
  { //localhost:4200/nombre-modulo/personalizado
    path: NombreModuloRoutes.nombreModulo.uri.slice(1),
    component: NombreComponenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NombreModuloRoutingModule { }
