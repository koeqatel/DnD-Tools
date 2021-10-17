import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  public iCopper = 0;
  public iSilver = 0;
  public iGold = 0;
  public iPlatinum = 0;

  public aInventory = [];

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.iCopper = 4;
    this.iSilver = 8;
    this.iGold = 6;
    this.iPlatinum = 9;

    this.aInventory.push("sword", "shield");
  }
}
