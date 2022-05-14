import { Component, Input } from '@angular/core';
import { Conditions, DamageType, Skills, SpeedTypes } from 'src/app/models/battlefield-model';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
})

export class EntityComponent
{
  @Input() oEntity = [];
  aReadableEntity = [];
  iHealthLeft = 0;

  ngOnInit()
  {
    this.aReadableEntity = this.oEntity;

    let aSkillList: [Skills, number][] = [];
    this.aReadableEntity["aSkillModifiers"].forEach(element =>
    {
      aSkillList.push([this.translateEnum(Skills, element[0]), element[1]]);
    });

    let aSpeedList: [SpeedTypes, number][] = [];
    this.aReadableEntity["aSpeed"].forEach(element =>
    {
      aSpeedList.push([this.translateEnum(SpeedTypes, element[0]), element[1]]);
    });

    this.aReadableEntity["aConditionImmunities"] = this.translateEnum(Conditions, this.oEntity["aConditionImmunities"]);
    this.aReadableEntity["aDamageImmunities"] = this.translateEnum(DamageType, this.oEntity["aDamageImmunities"]);
    this.aReadableEntity["aDamageResistances"] = this.translateEnum(DamageType, this.oEntity["aDamageResistances"]);
    this.aReadableEntity["aSkillModifiers"] = aSkillList;
    this.aReadableEntity["aSpeed"] = aSpeedList;

    console.log(this.aReadableEntity);
  }

  private translateEnum(eType, aEnum)
  {
    if (aEnum === []) return;

    if (typeof (aEnum) !== "object")
      return eType[aEnum];

    let aEnumTexts = [];

    aEnum.forEach(element =>
    {
      aEnumTexts.push(eType[element]);
    });

    return aEnumTexts;
  }
}