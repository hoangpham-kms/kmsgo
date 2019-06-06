import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from './../hotels/hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  hotel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.getHotelDetails();
  }

  private getHotelDetails() {
    this.route.paramMap.subscribe(params => {
      const hotelCode = params.get('hotelCode');
      this.hotel = this.hotelService.getHotelByCode(hotelCode);
    });
  }

  goBack() {
    this.router.navigate(['hotellist']);
  }
}
