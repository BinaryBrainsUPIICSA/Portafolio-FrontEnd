import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterUtils} from "../../../shared/model/routing/router-utils";
import {ProyectosModule} from "./routing/proyectos-routes";
import {BbPlProyectosComponent} from "./components/bb-pl-proyectos/bb-pl-proyectos.component";

const routes: Routes = [
  { //localhost:4200/nombre-modulo/personalizado
    path: ProyectosModule.nombreModulo.uri.slice(1),
    component: BbPlProyectosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
