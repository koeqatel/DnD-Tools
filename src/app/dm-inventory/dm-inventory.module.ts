import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DMInventoryPageRoutingModule } from './dm-inventory-routing.module';

import { DMInventoryPage } from './dm-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DMInventoryPageRoutingModule
  ],
  declarations: [DMInventoryPage]
})
export class DMInventoryPageModule {}
