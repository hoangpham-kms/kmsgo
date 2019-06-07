import { InMemoryDataService } from './db/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToggleButtonComponent } from './widget/toggle-button/toggle-button.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    TopNavComponent,
    HotelDetailsComponent,
    ToggleButtonComponent,
    HotelFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HotelFilterComponent]
})
export class AppModule { }
