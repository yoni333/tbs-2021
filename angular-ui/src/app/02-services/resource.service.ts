import { Injectable } from "@angular/core";
import { EResources } from "../../../../app/shared/resource";
import { Resource } from "../01-domain/resource";

@Injectable({providedIn:'root'})
export class ResourceService{

constructor(){}

resources():Resource[]{
    return [ 
        new Resource(EResources.food,1000,'http'),
        new Resource(EResources.wood,1000,'http'),
        new Resource(EResources.stone,1000,'http'),
        new Resource(EResources.iron,1000,'http'),
        new Resource(EResources.coal,1000,'http'),
        new Resource(EResources.silver,1000,'http'),
        new Resource(EResources.gold,1000,'http'),
        new Resource(EResources.magicPowder,1000,'http'),
    ]
}

}