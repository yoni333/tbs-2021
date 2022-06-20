import { Metadata } from "../shared/metadata";
import { ClassTypes, Data } from "../shared/data";
import { UID } from "../shared/uid";

export interface IMapLocation {
  
  x:number;
  y:number;
}


export class MapLocation extends Data<IMapLocation>{
  constructor(data:IMapLocation)
  {
    super(ClassTypes.MapLocation,data)
  }

  
}

export interface ICityDetails{
  location:MapLocation;
  cityName:string;
  metadata:Metadata;
  cityIndex:number; // for case  the user have more than 1 city
  
}

export class CityDetails  extends Data<ICityDetails>{
  constructor(data:ICityDetails){
    super(ClassTypes.CityDetails,data)
    this._data=data;
  
  }

  
}