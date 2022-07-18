import { Component, OnInit } from '@angular/core';
import { Card } from '../01-domain/card';
import { CardsService } from '../02-services/card.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  cards:Card[]
  constructor(private CardsService:CardsService) {
    this.cards= this.CardsService.cards
   }

  ngOnInit(): void {
  }

}
