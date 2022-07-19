import { Injectable } from "@angular/core";
import { ClassTypes } from "../../../../app/shared/data";
import {Building, EBuildingName}from '../01-domain/building'
@Injectable()
export class BuildingService{
    constructor(){

    }


    buildingList():Building[]{
        return [
            new Building({basicCost:{wood:100},level:1,maxLevel:20,name:EBuildingName.farm,nextLevelMulti:1.5,uid:'asd12',dialog:{}}),
            new Building({basicCost:{wood:100,food:100},level:1,maxLevel:20,name:EBuildingName.ironMine,nextLevelMulti:1.5,uid:'asd13',dialog:{}}),
            new Building({basicCost:{food:100},level:1,maxLevel:20,name:EBuildingName.lumberYard,nextLevelMulti:1.5,uid:'asd14',dialog:{}}),
            new Building({basicCost:{wood:100,food:150,iron:100},level:1,maxLevel:20,name:EBuildingName.stoneMine,nextLevelMulti:1.5,uid:'asd15',dialog:{}}),
            new Building({basicCost:{wood:100,food:150,iron:150},level:1,maxLevel:20,name:EBuildingName.silverMine,nextLevelMulti:1.5,uid:'asd16',dialog:{}}),
            new Building({basicCost:{wood:100,food:300,iron:300},level:1,maxLevel:20,name:EBuildingName.barracks,nextLevelMulti:1.5,uid:'asd17',dialog:{}}),
        ]
    }
}