

// export enum EProduce {
//   food = 'food',
//   wood = 'wood',
//   iron = 'iron',
//   stone = 'stone',
//   silver = 'silver',
//   gold = 'gold',
//   coal = 'coal',
//   magicPowder = 'magicPowder',
// }


// export class Produce {
//   _type: EProduce;
//   constructor(type) {
//     this.type=type
//    }
//   private set type (type){
//     console.log(type);
    
//     this._type=type
//   }
// }

// const a=new Produce(EProduce.iron);


 class Produce {
  _type;
  constructor(type) {
    this.type=type
   }
   set type (type){
    console.log(type);
    
    this._type=type
  }
}

const a=new Produce('iron');