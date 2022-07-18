import {EResources} from '../shared/resource'

export class Produce {
  _type: EResources;
  constructor(type:EResources) {
    this._type=type
   }
  private set type (type:EResources){
    console.log(type);
    
    this._type=type
  }
}

