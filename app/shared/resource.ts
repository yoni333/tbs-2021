// based on answer https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript

import { ClassTypes, Data } from "./data";
import { assignData } from "./object-utils";


export enum EResources {
  food = 'food',
  wood = 'wood',
  iron = 'iron',
  stone = 'stone',
  silver = 'silver',
  gold = 'gold',
  coal = 'coal',
  magicPowder = 'magicPowder',
};

type EResourceKeys = keyof typeof EResources;

export type IResources = {
  [key in EResourceKeys]: number;
}


function zeroResources():IResources{
  // todo map set 
  return   {
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

export class Resources extends Data<Partial<IResources>> {
  
  private _resources:IResources
  constructor(resources: Partial<IResources>) {
    super(ClassTypes.Resources,resources)
    this._resources  = {...zeroResources(),...resources}
  }


  get resources():IResources{
    return this._resources
  }
  
}
