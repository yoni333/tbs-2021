import { UID } from "../shared/uid";
import { IResource } from "../shared/resource";

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

export interface IBasicCost extends IResource {}

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
