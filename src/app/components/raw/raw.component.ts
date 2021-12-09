import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { EventsService } from '../../services/events.service';
import { MatTableDataSource } from '@angular/material/table';

export interface Eventos {
  Country:           string;
  Id:                string;
  Latitude:          number;
  Longitude:         number;
  Publisher:         string;  
}

@Component({
  selector: 'app-raw',
  templateUrl: './raw.component.html',
  styleUrls: ['./raw.component.css']
})
export class RawComponent {

  displayedEventColumns: string[] = ['Id', 'Country', 'Latitude', 'Longitude','Publisher'];  
  dataSource!: MatTableDataSource<Eventos>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor( private events: EventsService) {        

    this.events.getEvents()
        .subscribe( (data:any) =>{
          console.log(data.events);
          this.dataSource = new MatTableDataSource(data.events);
          this.dataSource.sort = this.sort;
        });
    
  }


  applyFilter(event: Event){
    const filterVAlue = ( event.target as HTMLInputElement ).value;
    this.dataSource.filter = filterVAlue.trim().toLowerCase();
  }

 
}
