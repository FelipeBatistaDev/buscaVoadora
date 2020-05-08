import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightFacadeService } from 'src/app/store/facades/flight.facade.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { DatatreatmentService } from 'src/app/services/datatreatment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})

export class ResultTableComponent implements OnInit {
  public flightList: any
  unsub$ = new Subject();
  cols: any[] = [];
  
  constructor(
    private _flightFacade: FlightFacadeService,
    private _dataTreatment: DatatreatmentService,
    private _router: Router
  ) { 
    this.flightList = [];
    this._flightFacade.flightList$.pipe(takeUntil(this.unsub$)).subscribe(store =>{
      this.flightList = this.rowCreator(store);

    })
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'escala', header: 'Escalas' },
      { field: 'tempoEspera', header: 'Tempo entre Escalas' },
      { field: 'tempoVoo', header: 'Tempo de Voô' },
      { field: 'valorTotal', header: 'Valor Total' },
  ];
  }


  rowCreator(flightList){
    return this._dataTreatment.createTableRows(flightList);
  }

}
