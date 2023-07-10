import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosRoutes } from './routing/nosotros-routes';
import { BbPlNosotrosComponent } from './components/bb-pl-nosotros/bb-pl-nosotros.component';

const routes: Routes = [
  {
    path: NosotrosRoutes.nosotros.uri.slice(1),
    component: BbPlNosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
