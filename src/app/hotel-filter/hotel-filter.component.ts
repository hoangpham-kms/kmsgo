import { Hotel } from './../hotels/hotel.model';
import { Observable, Subject, of } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HotelService } from '../hotels/hotel.service';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {

  @Output()
  hotels = new EventEmitter<Hotel[]>();

  hotels$: Observable<Hotel[]>;

  private filerTerm = new Subject<string>();

  constructor(
    private hotelService: HotelService
  ) { }

  ngOnInit() {

    this.hotels$ = this.filerTerm.pipe(
      // wait 500ms after each keystroke before considering the term
      debounceTime(200),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hotelService.searchHotels(term))
    );

    this.hotels$.subscribe( hotels => this.hotels.emit(hotels));
  }

  /**
   * emit filterTerm for subscriber
   * @param filterTerm
   */
  filter(filterTerm: string = '') {
    this.filerTerm.next(filterTerm);
  }
}
