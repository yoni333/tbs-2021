import { Component, OnInit } from '@angular/core';
import { Building } from '../01-domain/building';
import { Card } from '../01-domain/card';
import { BuildingService } from '../02-services/buildings.service';
import { CardsService } from '../02-services/card.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  cards:Card[]
  buildings:Building[]
  constructor(private CardsService:CardsService , private buildingService:BuildingService) {
    this.cards= this.CardsService.cards;
    this.buildings= buildingService.buildingList()
   }

  ngOnInit(): void {
  }

}
