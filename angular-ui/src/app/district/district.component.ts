import { Component, Input, OnInit } from '@angular/core';
import { Building, IBuilding } from '../01-domain/building';
import { Card } from '../01-domain/card';
import { District,IBuildingLocation } from '../01-domain/district';
import { BuildingService } from '../02-services/buildings.service';
import { CityService } from '../02-services/district.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  @Input() district!:District
  buildings!:IBuildingLocation[]
  constructor() {
  }
  
  ngOnInit(): void {
    this.buildings=this.district.data.content
  }

}
