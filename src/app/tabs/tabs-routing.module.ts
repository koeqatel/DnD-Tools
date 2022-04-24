import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inventory',
        loadChildren: () => import('../inventory/inventory.module').then(m => m.InventoryPageModule)
      },
      {
        path: 'dm-inventory',
        loadChildren: () => import('../dm-inventory/dm-inventory.module').then(m => m.DMInventoryPageModule)
      },
      {
        path: 'create-item',
        loadChildren: () => import('../create-item/create-item.module').then(m => m.CreateItemPageModule)
      },
      {
        path: 'battlefield',
        loadChildren: () => import('../battlefield/battlefield.module').then(m => m.BattlefieldPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/battlefield',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/battlefield',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
