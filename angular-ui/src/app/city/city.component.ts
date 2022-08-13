import { Component, OnInit } from '@angular/core';
import { City } from '../01-domain/city';
import { District } from '../01-domain/district';
import { CityService } from '../02-services/district.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  city:City
  districts:District[] = []
  constructor(private districtService:CityService) {
    this.city = this.districtService.city()
    this.districts = this.city.data.districts
    console.log(this.districts[0].data);
    
    
   }

  ngOnInit(): void {
  }

}
