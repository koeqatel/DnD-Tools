import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DMInventoryPage } from './dm-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: DMInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DMInventoryPageRoutingModule {}
