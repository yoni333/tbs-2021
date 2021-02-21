// based on answer https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript

import { ClassTypes, Data } from "./data";
import { assignData } from "./object-utils";


export enum EResource {
  food = 'food',
  wood = 'wood',
  iron = 'iron',
  stone = 'stone',
  silver = 'silver',
  gold = 'gold',
  coal = 'coal',
  magicPowder = 'magicPowder',
};

type EResourceKeys = keyof typeof EResource;

export type IResource = {
  [key in EResourceKeys]: number;
}


function zeroResources():IResource{
  return  {
    food : 0 ,
    wood : 0 ,
    iron : 0 ,
    stone : 0 ,
    silver : 0 ,
    gold : 0 ,
    coal : 0 ,
    magicPowder : 0 ,
  }
}

export class Resources extends Data<IResource> {
  
  private _resources:IResource
  constructor(resources: Partial<IResource>) {
    super(ClassTypes.Resources)
    this._resources  = {...zeroResources(),...resources}
  }


  get resources():IResource{
    return this._resources
  }
  
}
