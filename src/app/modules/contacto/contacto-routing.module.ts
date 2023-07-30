import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoRoutes } from './routing/contacto-routes';
import { BbPlFormularioContactoComponent } from './components/bb-pl-formulario-contacto/bb-pl-formulario-contacto.component';

const routes: Routes = [
  {
    path:ContactoRoutes.contactanos.uri.slice(1),
    component:BbPlFormularioContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
