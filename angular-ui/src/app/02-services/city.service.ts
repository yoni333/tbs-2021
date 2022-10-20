import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, map, Observable } from "rxjs";
import { ClassTypes } from "../../../../app/shared/data";
import {Building, EBuildingName}from '../01-domain/building'
import { City } from "../01-domain/city";
import { District } from "../01-domain/district";
import { mockCityData } from "./mock";
@Injectable({providedIn:'root'})
export class CityService{
   district!:District
   districtSubject:BehaviorSubject<District|null> = new BehaviorSubject<District|null>(null);
   district$:Observable<<District> = this.districtSubject.asObservable().pipe(filter(d=>d!==null));

    constructor(){

    }


   city():City{
    return mockCityData()
   }
   setDistrict(d:District){
    this.district=d 
   }
    
}