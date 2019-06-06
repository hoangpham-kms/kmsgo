import { Component, OnInit } from '@angular/core';
import { Hotel } from './../hotels/hotel.model';
import { HotelService } from './../hotels/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.getListOfHotels();
  }

  private getListOfHotels() {
    this.hotels = this.hotelService.getHotels();
  }
}
