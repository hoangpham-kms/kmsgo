import { Hotel } from './hotel.model';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  filteredHotels$: Observable<Hotel[]>;

  private hotelsURL = 'api/hotels'; // :base/:collectionName

  constructor(private http: HttpClient) {
    this.filteredHotels$ = this.getHotels();
  }

  initFilteredHotels$(filteredHotels$: Observable<Hotel[]>) {
    this.filteredHotels$ = filteredHotels$;
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsURL);
  }

  getHotelByCode(hotelCode: string): Observable<Hotel> {
    return this.getHotels().pipe(
      map((hotels: Hotel[]) => hotels.find(hotel => hotel.code === hotelCode))
    );
  }

  searchHotels(term: string): Observable<Hotel[]> {
    if (!term.trim()) {
      // if not search term, return full hotel array.
      return this.getHotels();
    }
    const searchTerm = new RegExp(term, 'i');
    return this.getHotels().pipe(
      map((hotels: Hotel[]) => hotels.filter(hotel => hotel.name.search(searchTerm) > - 1) )
    );
  }

}
