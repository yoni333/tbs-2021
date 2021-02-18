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

// const a=new Produce(EProduce.iron);


// export class Produce {
//   _type;
//   constructor(type) {
//     this.type=type
//    }
//   private set type (type){
//     console.log(type);
    
//     this._type=type
//   }
// }

// const a=new Produce('iron');