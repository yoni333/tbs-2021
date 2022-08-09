import { Component, Input, OnInit } from '@angular/core';
import { Building, IBuilding } from '../01-domain/building';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  @Input() building!:Building
  constructor() { }

  ngOnInit(): void {
  }

}
