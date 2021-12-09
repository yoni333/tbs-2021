import {EResource} from '../shared/resource'

export class Produce {
  _type: EResource;
  constructor(type) {
    this.type=type
   }
  private set type (type:EResource){
    console.log(type);
    
    this._type=type
  }
}

