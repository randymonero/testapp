import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificatorsPage } from './authentificators.page';

const routes: Routes = [
  {
    path: '',
    component: AuthentificatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificatorsPageRoutingModule {}
