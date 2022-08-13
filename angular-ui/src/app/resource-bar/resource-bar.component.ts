import { Component, Input, OnInit } from '@angular/core';
import { ResourcesUI, ResourcesUiItemsMap } from '../01-domain/resource';
import { ResourceService } from '../02-services/resource.service';

@Component({
  selector: 'app-resource-bar',
  templateUrl: './resource-bar.component.html',
  styleUrls: ['./resource-bar.component.scss']
})
export class ResourceBarComponent implements OnInit {

  resources:ResourcesUiItemsMap
  constructor(private resourceService:ResourceService) { 
    this.resources =this.resourceService.resources().resources
  }

  ngOnInit(): void {
  }

}
