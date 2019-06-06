import { Hotel } from './hotel.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  //:base/:collectionName
  private hotelsURL = 'api/hotels';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsURL);
  }

  getHotelByCode(hotelCode: string): Observable<Hotel> {
    return this.getHotels().pipe(
      map((hotels: Hotel[]) => hotels.find(hotel => hotel.code == hotelCode))
    );
  }
}
