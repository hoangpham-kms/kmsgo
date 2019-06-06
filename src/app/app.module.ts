import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    TopNavComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
