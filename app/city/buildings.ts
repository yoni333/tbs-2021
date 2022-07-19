import { UID } from "../shared/uid";
import { IResources } from "../shared/resource";
import { ClassTypes, Data } from "../shared/data";

export enum EBuildingName {
  farm = "farm",
  lumberYard = "lumberYard",
  barracks = "barracks",
  goldMine = "goldMine",
  ironMine = "ironMine",
  stoneMine = "stoneMine",
  silverMine = "silverMine",
  coalMine = "coalMine"
}

export interface IBasicCost extends Partial<IResources> {}

export interface IBuildingDialog {}

export interface IBuilding {
  uid: UID;
  name: EBuildingName;
  level: number;
  maxLevel: number;
  basicCost: IBasicCost;
  nextLevelMulti: number;
  dialog: IBuildingDialog;
}

export class Building extends Data<IBuilding> {
  constructor(data: IBuilding) {
    super(ClassTypes.CityBuilding, data);
  }
}
