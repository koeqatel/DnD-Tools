import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BattlefieldPageRoutingModule } from './battlefield-routing.module';

import { BattlefieldPage } from './battlefield.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BattlefieldPageRoutingModule
  ],
  declarations: [BattlefieldPage]
})
export class BattlefieldPageModule {}
