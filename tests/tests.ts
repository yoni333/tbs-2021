import { Resources } from "../app/shared/resource";
import { City } from "../app/city/city";
import { CityDetails, MapLocation } from "../app/city/details";

import {
  District,
  ECityDistricts,
  ECityDistrictsNames,
  IDistrict
} from "../app/city/districts";
import { Metadata } from "../app/shared/metadata";
import { createUID } from "../app/shared/uid";
const r: Resources = new Resources({ food: 100 });
console.log(r);
if (r.resources.food !== 100) {
  throw new Error("Resource class failed");
}

const mockIDistrict: IDistrict = {
  displayName: ECityDistrictsNames.academic,
  areaSize: 4,
  position: 1,
  metadata: new Metadata({}),
  content: [],
  name: ECityDistricts.military
};
const mockIDistrict2: IDistrict = {
  displayName: ECityDistrictsNames.farms,
  areaSize: 8,
  position: 2,
  metadata: new Metadata({}),
  content: [],
  name: ECityDistricts.military
};

const cityDistrict1: District = new District(mockIDistrict);
const cityDistrict2: District = new District(mockIDistrict2);

if (
  cityDistrict1.data.areaSize !== 4 ||
  cityDistrict1.data.position !== 1 ||
  cityDistrict1.data.displayName !== ECityDistrictsNames.academic
) {
  throw new Error("cityDistrict class failed");
}else{
  console.log('cityDistrict1 displayName:',cityDistrict1.data.displayName)
}

const cityDetails: CityDetails = new CityDetails({
  cityName: "allibaba",
  metadata: new Metadata({ uid: createUID(), date: new Date().valueOf() }),
  location: new MapLocation({ x: 2, y: 2 }),
  cityIndex: 1
});

const city: City = new City({
  resources: r,
  districts: [cityDistrict1, cityDistrict2],
  details: cityDetails
});
