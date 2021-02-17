// based on answer https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript


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
export type IResourcePartial = Partial<IResource>

export class Resource implements IResource {
  food = 0;
  wood = 0;
  iron = 0;
  stone = 0;
  silver = 0;
  gold = 0;
  coal = 0;
  magicPowder = 0;
  constructor(resources: IResourcePartial) {
    this.initVars(resources);
  }

  initVars(resources: IResourcePartial) {
    for (const [key, value] of Object.entries(resources)) {
      this[key] = value
    }

  }
}
