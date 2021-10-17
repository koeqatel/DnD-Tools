import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class DatabaseController implements OnInit {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  

  //storeItem(sName, sDescription, iAmount)
  //getItem(iId)
  //getItemsByName(sName)
  //updateItem(iId, sName, sDescription)
  //updateItemCount(iId, iAmount)
  //setItemOwner
  //deleteItem(iId)
}
