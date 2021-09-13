"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produce = void 0;
var Produce = /** @class */ (function () {
    function Produce(type) {
        this.type = type;
    }
    Object.defineProperty(Produce.prototype, "type", {
        set: function (type) {
            console.log(type);
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    return Produce;
}());
exports.Produce = Produce;
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
