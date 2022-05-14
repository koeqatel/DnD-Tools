import { Component, OnInit } from '@angular/core';
import { BattlefieldModel, Conditions, DamageType, Skills, SpeedTypes } from '../models/battlefield-model';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.page.html',
  styleUrls: ['./battlefield.page.scss'],
})
export class BattlefieldPage implements OnInit
{
  aEntities = [];

  constructor() { }

  ngOnInit()
  {

  }

  public createEntity()
  {
    let oBattlefieldModel = new BattlefieldModel();

    oBattlefieldModel.createEntity("Wolf", 11, 13, 12, 15, 12, 3, 12, 6, [[SpeedTypes.Land, 40]], [[Skills.Perception, 3], [Skills.Stealth, 4]], 2, [], [], []);
    oBattlefieldModel.createEntity("Chimera", 114, 14, 19, 11, 19, 3, 14, 10, [[SpeedTypes.Land, 30], [SpeedTypes.Fly, 60]], [[Skills.Perception, 8]], 2, [], [], []);
    oBattlefieldModel.createEntity("Ancient Red Dragon", 546, 22, 30, 10, 29, 18, 15, 23, [[SpeedTypes.Land, 40], [SpeedTypes.Climb, 40], [SpeedTypes.Fly, 80]], [[Skills.Perception, 16], [Skills.Stealth, 7]], 2, [], [DamageType.Fire], []);
    oBattlefieldModel.createEntity("Clay Golem", 133, 14, 20, 9, 18, 3, 8, 1, [[SpeedTypes.Land, 20]], [], 2, [], [DamageType.Acid, DamageType.Poison, DamageType.Psychic, DamageType.Bludgeoning, DamageType.Piercing, DamageType.Slashing], [Conditions.Charmed,Conditions.Exhaustion,Conditions.Frightened,Conditions.Paralyzed,Conditions.Petrified,Conditions.Poisoned]);
  }

  public getAllEntities()
  {
    let that = this;
    let oBattlefieldModel = new BattlefieldModel();
    oBattlefieldModel.getAllEntities().then((aEntityList: any[]) =>
    {
      that.aEntities = aEntityList;
    });

  }

  public async clearStorage()
  {
    await Storage.clear();
  }

}
