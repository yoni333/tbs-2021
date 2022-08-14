import { ECityDistricts, ECityDistrictsNames, IBuildingLocation } from '../../../../app/city/districts';
import { createUID } from '../../../../app/shared/uid';
import { Building, EBuildingName } from '../01-domain/building';
import { City, CityDetails, MapLocation, Metadata } from '../01-domain/city';
import { District } from '../01-domain/district';
import { EResources, ResourcesUI, ResourcesMap, ResourcesIconMap, Resources } from '../01-domain/resource';
export function mockResources(): ResourcesMap {
  const r: ResourcesMap = new Map();

  r.set(EResources.food, 1000),
    r.set(EResources.wood, 1000),
    r.set(EResources.stone, 1000),
    r.set(EResources.iron, 1000),
    r.set(EResources.coal, 1000),
    r.set(EResources.silver, 1000),
    r.set(EResources.gold, 1000),
    r.set(EResources.magicPowder, 1000);
  return r;
}
export function mockIconResourcesList(): ResourcesIconMap {
  const r: ResourcesIconMap = new Map();

  r.set(EResources.food, 'http'),
    r.set(EResources.wood, 'http'),
    r.set(EResources.stone, 'http'),
    r.set(EResources.iron, 'http'),
    r.set(EResources.coal, 'http'),
    r.set(EResources.silver, 'http'),
    r.set(EResources.gold, 'http'),
    r.set(EResources.magicPowder, 'http');
  return r;
}
export function mockDistrictFarm(): District {
  return  new District({areaSize:6,displayName:ECityDistrictsNames.farms,metadata:new Metadata({}),
    name:ECityDistricts.farms,position:1,content:buildingForFarmDistricy(),icon:'assets/castle.png'})
  
}

export function buildingForFarmDistricy(): IBuildingLocation[]{
  return [ {
    building:
    new Building({basicCost:{wood:100},level:1,maxLevel:20,name:EBuildingName.farm,nextLevelMulti:1.5,uid:'asd12',dialog:{}}),
    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{wood:100},level:1,maxLevel:20,name:EBuildingName.farm,nextLevelMulti:1.5,uid:'asd12',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{food:100},level:1,maxLevel:20,name:EBuildingName.lumberYard,nextLevelMulti:1.5,uid:'asd14',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{wood:100,food:150,iron:100},level:1,maxLevel:20,name:EBuildingName.stoneMine,nextLevelMulti:1.5,uid:'asd15',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{wood:100,food:150,iron:150},level:1,maxLevel:20,name:EBuildingName.silverMine,nextLevelMulti:1.5,uid:'asd16',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{wood:100,food:300,iron:300},level:1,maxLevel:20,name:EBuildingName.barracks,nextLevelMulti:1.5,uid:'asd17',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  ]
}
export function mockDistrictPalace(): District {
  return  new District({areaSize:6,displayName:ECityDistrictsNames.palace,metadata:new Metadata({}),
    name:ECityDistricts.palace,position:1,content:buildingForPalaceDistrict(),icon:'assets/castle 2.png'})
  
}

export function buildingForPalaceDistrict(): IBuildingLocation[]{
  return [ {
    building:
    new Building({basicCost:{wood:100},level:1,maxLevel:20,name:EBuildingName.palace,nextLevelMulti:1.5,uid:'asd12',dialog:{}}),
    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{wood:100},level:1,maxLevel:20,name:EBuildingName.warriorsHall,nextLevelMulti:1.5,uid:'asd12',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{food:100},level:1,maxLevel:20,name:EBuildingName.embassy,nextLevelMulti:1.5,uid:'asd14',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
 
  ]
}
export function mockDistrictMilitary(): District {
  return  new District({areaSize:6,displayName:ECityDistrictsNames.military,metadata:new Metadata({}),
    name:ECityDistricts.palace,position:1,content:buildingForPalaceDistrict(),icon:'assets/castle.png'})
  
}

export function buildingForMilitaryDistrict(): IBuildingLocation[]{
  return [ {
    building:
    new Building({basicCost:{wood:100},level:1,maxLevel:20,name:EBuildingName.barracks,nextLevelMulti:1.5,uid:'asd12',dialog:{}}),
    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{wood:100},level:1,maxLevel:20,name:EBuildingName.hospital,nextLevelMulti:1.5,uid:'asd12',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
  {
    building:
    new Building({basicCost:{food:100},level:1,maxLevel:20,name:EBuildingName.workshop,nextLevelMulti:1.5,uid:'asd14',dialog:{}}),

    position:1,
    uid:createUID(),
    metadata:new Metadata({})
  },
 
  ]
}

export function mockCityData():City {
  return new City({
    details: new CityDetails({
      cityIndex: 1,
      cityName: 'allibaba',
      location: new MapLocation({ x: 1, y: 1 }),
      metadata: new Metadata({}),
    }),
    districts: [mockDistrictPalace(),mockDistrictFarm(),mockDistrictMilitary()],
    resources:new Resources( mockResources()),
  });
}
