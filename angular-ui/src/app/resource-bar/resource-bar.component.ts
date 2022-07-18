import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../01-domain/resource';
import { ResourceService } from '../02-services/resource.service';

@Component({
  selector: 'app-resource-bar',
  templateUrl: './resource-bar.component.html',
  styleUrls: ['./resource-bar.component.scss']
})
export class ResourceBarComponent implements OnInit {

  resources:Resource[]
  constructor(private resourceService:ResourceService) { 
    this.resources =this.resourceService.resources()
  }

  ngOnInit(): void {
  }

}
