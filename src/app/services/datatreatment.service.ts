import { Injectable } from '@angular/core';
import { rowData } from '../models/rowData.model';

@Injectable({
  providedIn: 'root'
})
export class DatatreatmentService {

  receivedData: any[]
  row: rowData = {};
  rowData: any[] = [];

  constructor() { }


  createTableRows(flightList){
    this.rowData = []
    this.receivedData = flightList;

    this.receivedData.forEach(flight =>{
      var object = new rowData();
      object.escala = flight.voos.length > 1 ? 'sim': 'não';
      object.valorTotal = this.sumValue(flight.voos)
      object.tempoEspera = '12:20'
      object.tempoVoo = '12:12'
      object.voos = flight.voos;
      this.rowData.push(object);
    })
    return this.rowData;
  }

  sumValue(flight){
    let sum = 0;
    flight.forEach( x => {
      sum += x.valor
    });
    return sum;
  }

}
