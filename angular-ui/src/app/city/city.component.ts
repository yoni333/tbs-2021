import { Component, OnInit } from '@angular/core';
import { District } from '../01-domain/district';
import { DistrictService } from '../02-services/district.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  districts:District[] = []
  constructor(private districtService:DistrictService) {
    this.districts = this.districtService.districtList()
   }

  ngOnInit(): void {
  }

}
