import { Component, OnInit } from '@angular/core';
import { FlightFacadeService } from 'src/app/store/facades/flight.facade.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {
  public flightList: any
  unsub$ = new Subject();

  constructor(
    private _flightFacade: FlightFacadeService,
  ) { }

  ngOnInit(): void {
    this._flightFacade.flightList$.pipe(takeUntil(this.unsub$)).subscribe(store =>{
      this.flightList = store;
    })
  }

}
