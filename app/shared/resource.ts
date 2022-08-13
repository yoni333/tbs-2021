// based on answer https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript

import { ClassTypes, Data } from "./data";
import { assignData } from "./object-utils";

export enum EResources {
  food = "food",
  wood = "wood",
  iron = "iron",
  stone = "stone",
  silver = "silver",
  gold = "gold",
  coal = "coal",
  magicPowder = "magicPowder",
}

type EResourceKeys = keyof typeof EResources;

export type IResources = {
  [key in EResourceKeys]: number;
};

export type ResourcesMap = Map<EResources, number>;
export type ResourcesIconMap = Map<EResources, string>;

export function zeroResources(): ResourcesMap {
  const r = new Map();
  r.set(EResources.food, 0);
  r.set(EResources.wood, 0);
  r.set(EResources.iron, 0);
  r.set(EResources.stone, 0);
  r.set(EResources.silver, 0);
  r.set(EResources.gold, 0);
  r.set(EResources.coal, 0);
  r.set(EResources.magicPowder, 0);

  return r;
}

export class SpendAnswer {
  haveResources: boolean = false;
  missingResources: ResourcesMap = zeroResources();
  constructor(haveResources: boolean, missingResources: ResourcesMap) {
    this.haveResources = haveResources;
    this.missingResources = missingResources;
  }
}

export class Resources extends Data<ResourcesMap> {
  private _resources: ResourcesMap;
  get resources(): ResourcesMap {
    return this._resources;
  }
  set resources(resources: ResourcesMap) {
    this._resources = resources
  }
  constructor(resources: ResourcesMap) {
    super(ClassTypes.Resources, resources)
    this._resources = resources
  }
  checkIfCanBuild(needResources: ResourcesMap) {
    let haveResources: boolean = true
    const afterCalc = new Map()
    for (const [key, value] of needResources) {
      haveResources =
        (this.resources.get(key) || 0) - value >= 0 ? true : false;
    }
    return haveResources;
  }
  subResources(needResources: ResourcesMap): ResourcesMap {
    const resourceAfterBuild: ResourcesMap = new Map();
    for (const [key, value] of needResources) {
      resourceAfterBuild.set(key, (this.resources.get(key) || 0) - value);
    }
    return resourceAfterBuild;
  }
  spend(needResources: ResourcesMap): SpendAnswer {
    const haveResources: boolean = this.checkIfCanBuild(needResources);
    if (haveResources) {
      this.resources = this.subResources(needResources)
    }
    return new SpendAnswer(haveResources, this.subResources(needResources));
  }
}
