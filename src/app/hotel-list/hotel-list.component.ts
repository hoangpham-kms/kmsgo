import { Observable } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Hotel } from './../hotels/hotel.model';
import { HotelService } from './../hotels/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit, AfterViewInit {

  hotels$: Observable<Hotel[]>;

  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
    this.getListOfHotels();
  }

  ngAfterViewInit(): void {
    this.getListOfHotels();
  }

  private getListOfHotels() {
    this.hotels$ = this.hotelService.filteredHotels$;
  }
}
