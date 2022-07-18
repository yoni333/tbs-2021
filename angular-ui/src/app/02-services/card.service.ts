import { Injectable } from "@angular/core";
import { EBuildingName } from "../../../../app/city/buildings";
import { Card } from "../01-domain/card";

@Injectable({providedIn:'root'})
export class CardsService{
    constructor(){}

    get cards():Card[]{
        return [
            new Card('',EBuildingName.barracks),
            new Card('',EBuildingName.farm),
            new Card('',EBuildingName. lumberYard),
            new Card('',EBuildingName.ironMine),
            new Card('',EBuildingName.stoneMine),
            new Card('',EBuildingName.silverMine),
            new Card('',EBuildingName.goldMine),
            new Card('',EBuildingName.coalMine),
        ]
    }
}