import { Component, Input, OnInit } from '@angular/core';
import { Building, IBuilding } from '../01-domain/building';
import { Card } from '../01-domain/card';
import { District,IBuildingLocation } from '../01-domain/district';
import { BuildingService } from '../02-services/buildings.service';
import { CityService } from '../02-services/city.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  district:District|null=null
  buildings!:IBuildingLocation[]|undefined
  constructor(private cityService:CityService) {
  }
  
  ngOnInit(): void {
    this.district=this.cityService.district
    this.buildings=this.district?.data?.content
  }

}
