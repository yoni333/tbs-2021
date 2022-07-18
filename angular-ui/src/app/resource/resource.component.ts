import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../01-domain/resource';



@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  @Input() public css:string='';
  @Input() public resource!:Resource;
  constructor() { }

  ngOnInit(): void {
  }

}
