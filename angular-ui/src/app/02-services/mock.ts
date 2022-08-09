import { City, CityDetails, MapLocation, Metadata } from '../01-domain/city';
import { District } from '../01-domain/district';
import { EResources, Resource } from '../01-domain/resource';
export function mockResources(){
    return [ 
        new Resource(EResources.food,1000,'http'),
        new Resource(EResources.wood,1000,'http'),
        new Resource(EResources.stone,1000,'http'),
        new Resource(EResources.iron,1000,'http'),
        new Resource(EResources.coal,1000,'http'),
        new Resource(EResources.silver,1000,'http'),
        new Resource(EResources.gold,1000,'http'),
        new Resource(EResources.magicPowder,1000,'http'),
    ]
}
export function mockDistrict(): District {
  return new District({});
}
export function mockCityData() {
  return new City({
    details: new CityDetails({
      cityIndex: 1,
      cityName: 'allibaba',
      location: new MapLocation({ x: 1, y: 1 }),
      metadata:new Metadata({}),
      
    }),
    districts:mockCityData(),
    resources:mockResources()
  });
}
