import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './db/in-memory-data.service';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ToggleButtonComponent } from './widget/toggle-button/toggle-button.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';


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
    AdminModule, AdminRoutingModule,
    AuthModule, AuthRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HotelFilterComponent]
})
export class AppModule { }
