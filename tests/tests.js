"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resource_1 = require("../app/shared/resource");
var city_1 = require("../app/city/city");
var details_1 = require("../app/city/details");
var r = new resource_1.Resources({ food: 100 });
console.log(r);
if (r.resources.food !== 100) {
    throw new Error("Resource class failed");
}
var districts_1 = require("../app/city/districts");
var metadata_1 = require("../app/shared/metadata");
var uid_1 = require("../app/shared/uid");
var cityDistrict = new districts_1.District({ displayName: districts_1.ECityDistrictsNames.academic, areaSize: 4, position: 1 });
var cityDistrict2 = new districts_1.District({ displayName: districts_1.ECityDistrictsNames.farms, areaSize: 8, position: 2 });
if (cityDistrict.areaSize !== 4 || cityDistrict.position !== 1 || cityDistrict.displayName !== districts_1.ECityDistrictsNames.academic) {
    throw new Error("cityDistrict class failed");
}
var cityDetails = new details_1.CityDetails({
    cityName: 'allibaba',
    metadata: new metadata_1.Metadata({ uid: (0, uid_1.createUID)(), date: new Date().valueOf() }),
    location: new details_1.MapLocation({ x: 2, y: 2 }),
    cityIndex: 1
});
var city = new city_1.City({
    resources: r,
    districts: [cityDistrict],
    details: cityDetails
});
