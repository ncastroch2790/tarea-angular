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
import  {TableauModule} from 'ngx-tableau';

import { AgmCoreModule } from '@agm/core';

//Graficos
import { NgChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [
    AppComponent,    
    SidenavComponent, 
    MapComponent, 
    NetworkComponent, 
    RawComponent,        
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgB_4DAsQPqE6wZNDnzla0LbNk6etIK-Q'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgChartsModule,
    MaterialModule,    
    TableauModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
