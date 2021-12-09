import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor( private http: HttpClient ) {
    console.log('Events services inicializado');
  }

  getEvents(){
    
    return this.http.get('https://ccamposc.pythonanywhere.com/events');

  }
              
}
