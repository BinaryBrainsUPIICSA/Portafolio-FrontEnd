import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {OverlayModule} from "@angular/cdk/overlay";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    OverlayModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
