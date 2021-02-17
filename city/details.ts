import { UID } from "../shared/uid";

export interface IMapLocation {
  land:UID;
  x:number;
  y:number;
}

export interface ICityDetails{
  location:IMapLocation;
  cityName:string;
  serial:UID;
  cityIndex:number; // for case  the user have more than 1 city
  level:number;
  
}