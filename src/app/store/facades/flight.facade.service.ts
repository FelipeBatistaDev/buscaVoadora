import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { saveFlightList, clearFlightList } from '../actions/flight.actions'
import { Flight } from 'src/app/models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightFacadeService {

  flightList$: Observable<Flight>;


  constructor(
    private store: Store<{flightReducer: Flight}>
  ) {
    this.flightList$ = store.pipe(select('flightReducer'));
   }

   saveFlightList(payload){
     this.store.dispatch(saveFlightList({listData: payload}))
   }

   clearFlightList(){
    this.store.dispatch(clearFlightList());
  }
   
}
