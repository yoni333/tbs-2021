import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../01-domain/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
