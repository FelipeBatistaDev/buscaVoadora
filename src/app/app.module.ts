import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { ResultTableComponent } from './components/result-table/result-table.component';

import { ApiServiceService } from './services/api-service.service';
import { FlightFacadeService } from './store/facades/flight.facade.service';
import { DatatreatmentService } from './services/datatreatment.service';
import { flightReducer } from './store/reducers/flight.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    SearchMenuComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('flightReducer', flightReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    NgbModule,
  ],
  providers: [
    ApiServiceService,
    FlightFacadeService,
    DatatreatmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
