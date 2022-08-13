import { Injectable } from "@angular/core";
import { ClassTypes } from "../../../../app/shared/data";
import {Building, EBuildingName}from '../01-domain/building'
import { City } from "../01-domain/city";
import { District } from "../01-domain/district";
import { mockCityData } from "./mock";
@Injectable({providedIn:'root'})
export class CityService{
    constructor(){

    }


   city():City{
    return mockCityData()
   }
    
}