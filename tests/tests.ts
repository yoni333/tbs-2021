import {Resource} from '../city/shared/resource'
const r: Resource = new Resource({ food: 100 })
console.log(r);
if (r.food !== 100) { throw new Error("Resource class failed"); }