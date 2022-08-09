import { ClassTypes, Data } from "../shared/data";
import { IMetadata, Metadata } from "../shared/metadata";
import { assignData } from "../shared/object-utils";
import { UID } from "../shared/uid";
import { Building, IBuilding } from "./buildings";

export enum ECityDistricts {
  palace = "palace",
  tradeYard = "trade",
  military = "military",
  mage = "mage",
  farms = "farms",
  mines = "mines"
}

type ECityDistrictsKeys = keyof typeof ECityDistricts;

export type IECityDistrictsNames = {
  [key in ECityDistrictsKeys]: number;
};

export enum ECityDistrictsNames {
  palace = "The palace",
  tradeYard = "The Trade Area ",
  military = "The Military Camp",
  mage = "The mage lab",
  farms = "The Farms",
  mines = "The Mines"
}

export interface IBuildingLocation {
  metadata: Metadata;
  position: number; //in the district
  uid: UID; //taken from the building himself;
  building: Building;
}
export interface IDistrict {
  metadata: Metadata;
  name: ECityDistricts;
  displayName: ECityDistrictsNames;
  position: number; // place  in the city
  areaSize: number; //how much buildings that district can have
  content: IBuildingLocation[];
}

export class District extends Data<IDistrict> {
  constructor(data: IDistrict) {
    super(ClassTypes.CityDistrict, data);
  }
}
