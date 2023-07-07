import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NombreModuloRoutingModule } from './nombre-modulo-routing.module';
import { NombreComponenteComponent } from './components/nombre-componente/nombre-componente.component';
import {SharedModule} from "../../../shared/modules/shared/shared/shared.module";


@NgModule({
  declarations: [
    NombreComponenteComponent
  ],
  imports: [
    CommonModule,
    NombreModuloRoutingModule,
    SharedModule
  ]
})
export class NombreModuloModule { }
