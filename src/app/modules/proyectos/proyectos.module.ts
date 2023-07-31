import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './proyectos-routing.module';
import { SharedModule } from '../../../shared/modules/shared/shared/shared.module';

import { BbPlProyectosComponent } from './components/bb-pl-proyectos/bb-pl-proyectos.component';
import { BbPlProyectosSliderComponent } from './components/bb-pl-proyectos-slider/bb-pl-proyectos-slider.component';



@NgModule({
  declarations: [
    BbPlProyectosComponent,
    BbPlProyectosSliderComponent
  ],
  imports: [
    CommonModule,ProjectsRoutingModule, SharedModule
  ]
})
export class ProyectosModule { }
