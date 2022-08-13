import { City, CityDetails, MapLocation, Metadata } from '../01-domain/city';
import { District } from '../01-domain/district';
import { EResources, ResourcesUI } from '../01-domain/resource';
export function mockResources(){
    return [ 
        new ResourcesUI(EResources.food,1000,'http'),
        new ResourcesUI(EResources.wood,1000,'http'),
        new ResourcesUI(EResources.stone,1000,'http'),
        new ResourcesUI(EResources.iron,1000,'http'),
        new ResourcesUI(EResources.coal,1000,'http'),
        new ResourcesUI(EResources.silver,1000,'http'),
        new ResourcesUI(EResources.gold,1000,'http'),
        new ResourcesUI(EResources.magicPowder,1000,'http'),
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
