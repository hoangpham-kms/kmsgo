import { APPDB } from './../app.db';
import { Hotel } from './hotel.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  getHotels(): Hotel[] {
    return APPDB.hotels;
  }

  getHotelByCode(hotelCode: string): Hotel {
    return APPDB.hotels.find(hotel => hotel.code == hotelCode);
  }
}
