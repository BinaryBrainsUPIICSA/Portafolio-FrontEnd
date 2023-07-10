import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { SharedModule } from 'src/shared/modules/shared/shared/shared.module';
import { BbPlNosotrosComponent } from './components/bb-pl-nosotros/bb-pl-nosotros.component';


@NgModule({
  declarations: [
    BbPlNosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    SharedModule
  ]
})
export class NosotrosModule { }
