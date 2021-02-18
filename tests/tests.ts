import {Resources} from '../app/shared/resource'
const r: Resources = new Resources({ food: 100 })
console.log(r);
if (r.resources.food !== 100) { throw new Error("Resource class failed"); }


import {CityDistrict, ECityDistrictsNames} from '../app/city/districts'

const cityDistrict =  new CityDistrict({displayName:ECityDistrictsNames.academic,areaSize:4,position:1})

if (cityDistrict.areaSize!==4 || cityDistrict.position !==1 || cityDistrict.displayName !== ECityDistrictsNames.academic){
  throw new Error("cityDistrict class failed"); 
}