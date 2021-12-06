import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Marker } from '../../../classes/marker_map.class';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  countries: any[] = [];
  events: string[] = [];
  selected: string = '';
  
  opened: boolean = true;

  campaignOne: FormGroup;
  countriesFormControl = new FormControl();

  markers: Marker[] = [];
    
  constructor( private http: HttpClient ) {

    this.http.get('https://restcountries.com/v2/all')
            .subscribe( (resp: any) => {
              
              this.countries = resp;              
              //console.log(this.countries);

            });

    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, day)),
      end: new FormControl(new Date(year, month, day+3)),
    });
    
  }

  ngOnInit(): void {
  }

  
  shouldRun = true;

  get countrySelected() {
    //console.log(this.selected);
    return this.selected;
  }

  addCountryMarker( country:any ){
 
    const newMarker = new Marker( country.latlng[0], country.latlng[1] );    
    this.markers.push( newMarker );
    
    if ( localStorage.getItem('markers') ){
      this.markers = JSON.parse( localStorage.getItem('markers')! );            
      //console.log(`sidenav ${this.markers}`);
    }

    this.saveMarkerLocalStorage();

    //console.log(`sidenav ${this.markers}`);
  }

  saveMarkerLocalStorage(){
    localStorage.setItem( 'markers', JSON.stringify(this.markers) ) ;
  }
}
