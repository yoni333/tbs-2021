import {Resources} from '../app/shared/resource'
import {City} from '../app/city/city'
import {CityDetails,MapLocation} from '../app/city/details'
const r: Resources = new Resources({ food: 100 })
console.log(r);
if (r.resources.food !== 100) { throw new Error("Resource class failed"); }


import {District, ECityDistrictsNames} from '../app/city/districts'
import { Metadata } from '../app/shared/metadata';
import { createUID } from '../app/shared/uid';

const cityDistrict:District =  new District({displayName:ECityDistrictsNames.academic,areaSize:4,position:1})
const cityDistrict2:District =  new District({displayName:ECityDistrictsNames.farms,areaSize:8,position:2})

if (cityDistrict.areaSize!==4 || cityDistrict.position !==1 || cityDistrict.displayName !== ECityDistrictsNames.academic){
  throw new Error("cityDistrict class failed"); 
}

const cityDetails:CityDetails = new CityDetails ({
  cityName:'allibaba',
  metadata:new Metadata({uid:createUID(), date:new Date().valueOf()}),
  location:new MapLocation({x:2,y:2}),
  cityIndex:1
})

const city:City = new City({
  resources:r,
  districts:[cityDistrict],
  details:cityDetails

})