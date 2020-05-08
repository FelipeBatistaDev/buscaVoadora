import { Component, OnInit } from '@angular/core';
import { FlightFacadeService } from 'src/app/store/facades/flight.facade.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { DatatreatmentService } from 'src/app/services/datatreatment.service';
import { Router } from '@angular/router';
import { rowData } from 'src/app/models/rowData.model';

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
  public flightList: rowData[];
  unsub$ = new Subject();
  cols = [];
  
  constructor(
    private _flightFacade: FlightFacadeService,
    private _dataTreatment: DatatreatmentService,
    private _router: Router
  ) { 

    this._flightFacade.flightList$.pipe(takeUntil(this.unsub$)).subscribe(store =>{
      this.flightList = this.rowCreator(store);
      
      if(this.flightList.length == 0){
        this._router.navigate([''])
      }
    })
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'escala', header: 'Escala?' },
      { field: 'tempoEspera', header: 'Tempo entre Escalas' },
      { field: 'tempoVoo', header: 'Tempo de Voô' },
      { field: 'valorTotal', header: 'Valor Total' },
  ];
  }


  rowCreator(flightList){
    return this._dataTreatment.createTableRows(flightList);
  }

}
