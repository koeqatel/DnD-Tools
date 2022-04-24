import { Component, OnInit } from '@angular/core';
import { BattlefieldModel, Skills } from '../models/battlefield-model';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.page.html',
  styleUrls: ['./battlefield.page.scss'],
})
export class BattlefieldPage implements OnInit {

  constructor() {}

  ngOnInit() {
   
  }

  public createEntity() {
    let oBattlefieldModel = new BattlefieldModel();

    //TODO: Today I learned I dont like maps...
    let aSkillModifiers = new Map<Skills, number>();
    aSkillModifiers.set(Skills.Perception, 3);
    aSkillModifiers.set(Skills.Stealth, 4);
    
    oBattlefieldModel.createEntity("Wolf", 11, 13, 12, 15, 12, 3, 12, 6, 40, aSkillModifiers, 2, [], [], []);
  }

  public getAllEntities()
  {
    let oBattlefieldModel = new BattlefieldModel();
    oBattlefieldModel.getAllEntities().then(aEntities => {
      console.warn(aEntities);
    });

  }
  public async clearStorage()
  {
    await Storage.clear();
  }

}
