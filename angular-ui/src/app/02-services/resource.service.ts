import { Injectable } from "@angular/core";
import { EResources } from "../../../../app/shared/resource";
import { ResourcesUI } from "../01-domain/resource";
import {mockResources,mockIconResourcesList} from '../02-services/mock'
@Injectable({providedIn:'root'})
export class ResourceService{

constructor(){}

resources():ResourcesUI{
    return new ResourcesUI(
        mockResources(),mockIconResourcesList()
    )
}

}