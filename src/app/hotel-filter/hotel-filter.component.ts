import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HotelService } from '../hotels/hotel.service';
import { Hotel } from './../hotels/hotel.model';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {

  hotels$: Observable<Hotel[]>;

  private SEARCH_ALL_HOTEL_TERM = '';
  private filerTerm = new BehaviorSubject<string>(this.SEARCH_ALL_HOTEL_TERM);

  constructor(private hotelService: HotelService) {}

  ngOnInit() {

    this.hotels$ = this.filerTerm.pipe(
      // wait 500ms after each keystroke before considering the term
      debounceTime(500),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hotelService.searchHotels(term))
    );
    this.hotelService.initFilteredHotels$(this.hotels$);
  }

  /**
   * emit filterTerm for subscriber
   * @param filterTerm
   */
  filter(filterTerm: string = this.SEARCH_ALL_HOTEL_TERM) {
    this.filerTerm.next(filterTerm);
  }
}
