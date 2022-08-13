import { Injectable } from "@angular/core";
import { EResources } from "../../../../app/shared/resource";
import { ResourcesUI } from "../01-domain/resource";

@Injectable({providedIn:'root'})
export class ResourceService{

constructor(){}

resources():ResourcesUI{
    return new ResourcesUI({
        
    })
}

}