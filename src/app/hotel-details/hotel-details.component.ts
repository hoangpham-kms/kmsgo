import { Hotel } from './../hotels/hotel.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from './../hotels/hotel.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  hotel$: Observable<Hotel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.getHotelDetails();
  }

  private getHotelDetails() {
    this.hotel$ = this.route.paramMap.pipe(
      switchMap( params => {
        const hotelCode = params.get('hotelCode');
        return this.hotelService.getHotelByCode(hotelCode);
      })
    );
  }

  goBack() {
    this.router.navigate(['hotellist']);
  }
}
