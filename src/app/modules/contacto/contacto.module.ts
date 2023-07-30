import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { SharedModule } from 'src/shared/modules/shared/shared/shared.module';
import { BbPlFormularioContactoComponent } from './components/bb-pl-formulario-contacto/bb-pl-formulario-contacto.component';



@NgModule({
  declarations: [
    BbPlFormularioContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule
  ]
})
export class ContactoModule { }
