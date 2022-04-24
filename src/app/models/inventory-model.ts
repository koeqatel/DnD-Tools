import * as internal from "stream";
import { DamageType } from "./battlefield-model";

export class InventoryModel {
  //storeItem(sName, sDescription, iAmount)
  //getItem(iId)
  //getItemsByName(sName)
  //updateItem(iId, sName, sDescription)
  //updateItemCount(iId, iAmount)
  //setItemOwner
  //deleteItem(iId)

}

export enum ItemType {
  ArmorShield,
  Potion,
  Ring,
  Rod,
  Scroll,
  Staff,
  Wand,
  Item
}

export class Item {
  constructor(sName: string, sDescription: string, eItemType: ItemType, iModifier: number) {
    
  }
}

export class Weapon {
  constructor(sName: string, sDescription: string, iModifier: number, eDamageType: DamageType, bIsMagic: boolean = false) {
    
  }
}