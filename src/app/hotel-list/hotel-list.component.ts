import { APPDB } from './../app.db';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels = APPDB.hotels;
  constructor() { }

  ngOnInit() {
  }

}
