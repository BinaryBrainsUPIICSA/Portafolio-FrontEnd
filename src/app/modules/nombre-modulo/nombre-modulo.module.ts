import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NombreModuloRoutingModule } from './nombre-modulo-routing.module';
import { NombreComponenteComponent } from './components/nombre-componente/nombre-componente.component';


@NgModule({
  declarations: [
    NombreComponenteComponent
  ],
  imports: [
    CommonModule,
    NombreModuloRoutingModule
  ]
})
export class NombreModuloModule { }
