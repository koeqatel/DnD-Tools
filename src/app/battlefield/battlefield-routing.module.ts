import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattlefieldPage } from './battlefield.page';

const routes: Routes = [
  {
    path: '',
    component: BattlefieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BattlefieldPageRoutingModule {}
