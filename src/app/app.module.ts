import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { flightReducer } from './store/reducers/flight.reducer';

import { AppComponent } from './app.component';
import { SearchMenuComponent } from './components/search-menu/search-menu.component';
import { ResultTableComponent } from './components/result-table/result-table.component';

import { ApiServiceService } from './services/api-service.service';
import { FlightFacadeService } from './store/facades/flight.facade.service';
import { DatatreatmentService } from './services/datatreatment.service';
import { CompanyFacadeService } from './store/facades/company.facade.service';
import { MessageService } from 'primeng/api';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { companyReducer } from './store/reducers/company.reducer';

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
    MessagesModule,
    MessageModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('flightReducer', flightReducer),
    StoreModule.forFeature('companyReducer', companyReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    NgbModule,
  ],
  providers: [
    MessageService,
    ApiServiceService,
    FlightFacadeService,
    DatatreatmentService,
    CompanyFacadeService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
