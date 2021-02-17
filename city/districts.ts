import { UID } from "../shared/uid";
import { IBuilding } from "./buildings";

export enum ECityDistricts {
  palace = "palace",
  tradeYard = "trade",
  military = "military",
  mage = "mage",
  academic = "academic",
  farms="farms",
  mines="mines",
}

export enum ECityDistrictsNames  {
  palace = "The palace",
  tradeYard = "The Trade Area ",
  military = "The Military Camp",
  mage = "The mage lab",
  academic = "The Academic Area",
  farms="The Farms",
  mines="The Mines",
}

export interface IBuildingLocation{
  position:number; //in the district
  uid:UID; //taken from the building himself;
  building:IBuilding;
}
export interface ICityDistrict {
  name: ECityDistricts;
  displayName:ECityDistrictsNames;
  position:number; // place  in the city
  areaSize:number;  //how much buildings that district can have
  filledBy:IBuildingLocation[];
}



