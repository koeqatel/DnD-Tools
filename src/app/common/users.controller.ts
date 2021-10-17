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

  //createUser(sName)
  //getUsers(iId)
  //getUsersByName(sName)
  //getAllUsers()
  //giveItem()
  //takeItem()
}
