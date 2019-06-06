import { APPDB } from './../app.db';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  hotel;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const hotelCode = params.get('hotelCode');
      this.hotel = APPDB.hotels.find( hotel => hotel.code == hotelCode);
    })
  }

  goBack() {
    this.router.navigate(['hotellist']);
  }
}
