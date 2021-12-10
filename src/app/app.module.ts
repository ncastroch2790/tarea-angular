import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';

import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { NetworkComponent } from './components/network/network.component';
import { RawComponent } from './components/raw/raw.component';

//Ngx Tableau
import { TableauModule } from 'ngx-tableau';

//Graficos
import { NgChartsModule } from 'ng2-charts'
import { Highcharts } from 'highcharts/modules/networkgraph'

//Services
import { EventsService } from './services/events.service';

import { ChartComponent } from './components/chart/chart.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { NetworkChartComponent } from './components/network-chart/network-chart.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, PowerCharts);

@NgModule({
  declarations: [
    AppComponent,    
    SidenavComponent, 
    MapComponent, 
    NetworkComponent, 
    RawComponent,     
    ChartComponent, NetworkChartComponent,     
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
    HighchartsChartModule,
    NgxGraphModule,
    FusionChartsModule,
  ],
  providers: [
    EventsService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
