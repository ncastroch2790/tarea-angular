import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { FusionchartComponent } from './components/fusionchart/fusionchart.component';
import { MapComponent } from './components/map/map.component';
import { NetworkComponent } from './components/network/network.component';
import { RawComponent } from './components/raw/raw.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';


//Ngx Tableau
import { TableauModule } from 'ngx-tableau';

//Graficos
import { NgChartsModule } from 'ng2-charts'

//Angular FusionCharts
import { FusionChartsModule } from 'angular-fusioncharts';

//Angular FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';

import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';

import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';


//Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, PowerCharts, Charts, FusionTheme);

//Services
import { EventsService } from './services/events.service';


@NgModule({
  declarations: [
    AppComponent,    
    SidenavComponent, 
    MapComponent, 
    NetworkComponent, 
    RawComponent, FusionchartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgChartsModule,
    MaterialModule,    
    TableauModule,
    FusionChartsModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
