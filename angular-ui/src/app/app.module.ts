import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ResourceBarComponent } from './resource-bar/resource-bar.component';
import { ResourceComponent } from './resource/resource.component';
import { CityComponent } from './city/city.component';
import { BuildingComponent } from './building/building.component';
import { DistrictComponent } from './district/district.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ResourceBarComponent,
    ResourceComponent,
    CityComponent,
    BuildingComponent,
    DistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
