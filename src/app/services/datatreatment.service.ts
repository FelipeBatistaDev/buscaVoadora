import { Injectable } from '@angular/core';
import { rowData } from '../models/rowData.model';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CompanyFacadeService } from '../store/facades/company.facade.service';


@Injectable({
  providedIn: 'root'
})
export class DatatreatmentService {

  receivedData: rowData[];
  companyList;
  row: rowData = {};
  rowData = [];
  unsub$ = new Subject();
  flightDetails = [];

  constructor(
    private _companyFacade: CompanyFacadeService,
  ) {
    this._companyFacade.companyList$.pipe(takeUntil(this.unsub$)).subscribe(store =>{
        this.companyList = store;
    })
   }


  createTableRows(flightList){
    this.rowData = []
    this.flightDetails = [];
    this.receivedData = flightList;

    this.receivedData.forEach(flight =>{
      var object = new rowData();
      object.escala = flight.voos.length > 1 ? 'sim': 'não';
      object.valorTotal = `R$ ${this.sumValue(flight.voos)}`;
      object.tempoEspera = this.subConnectionWaste(flight.voos);
      object.tempoVoo = this.subHour(flight.voos);
      object.voos = this.putNameOnAirports(flight.voos);
      this.rowData.push(object);
    })
    return this.rowData;
  }


  putNameOnAirports(flights){
    this.flightDetails = [];
    
    flights.forEach((flight, index) => {
      var companyFrom = this.companyList.filter(x => x.aeroporto == flight.origem)
      var companyTo = this.companyList.filter(x => x.aeroporto == flight.destino)

      this.flightDetails.push({
        voo: flight.voo,
        origem: companyFrom[0].nome,
        destino: companyTo[0].nome,
        data_saida: flight.data_saida,
        saida: flight.saida,
        chegada: flight.chegada,
        valor: flight.valor
      })
    
    })

    return this.flightDetails;
  }


  subConnectionWaste(flight){
    var arriveHours =  new Date('01/01/2007 ' + flight[0].chegada).getHours()
    var arriveMinutes = new Date('01/01/2007 ' + flight[0].chegada).getMinutes()
    var sailHour = new Date('01/01/2007 ' + flight[flight.length - 1].saida).getHours()
    var sailMinutes = new Date('01/01/2007 ' + flight[flight.length - 1].saida).getMinutes()

    if(flight.length == 1){
      return '--'
    }

    var totalWastedHours = 24 - arriveHours + sailHour
    var totalWastedMinutes = arriveMinutes + sailMinutes

    if(totalWastedMinutes >= 60){
      let hours =  Math.trunc(totalWastedMinutes/60);
      let minutes = hours*60 - totalWastedMinutes;
      
      totalWastedHours += hours;
      
      if(minutes == 0){
        totalWastedMinutes = 0
      } else{
        totalWastedMinutes += Math.abs(minutes)
      } 
    }

    return `${Math.abs(totalWastedHours)}:${totalWastedMinutes == 0? '00': totalWastedMinutes}`
  }

  sumValue(flight){
    let sum = 0;
    flight.forEach( x => {
      sum += x.valor
    });
    return sum.toFixed(2);
  }

  subHour(flight){
    let totalHours = 0
    let totalMinutes = 0

    flight.forEach(x => {
      var startHour = new Date('01/01/2007 ' + x.saida).getHours();
      var endHour = new Date('01/01/2007 ' + x.chegada).getHours();

      var startMinutes = new Date('01/01/2007 ' + x.saida).getMinutes();
      var endMinutes = new Date('01/01/2007 ' + x.chegada).getMinutes();

      var hourDiff = endHour - startHour;
      var minutesDiff = endMinutes - startMinutes;

      totalHours += Math.abs(hourDiff);
      totalMinutes += Math.abs(minutesDiff);
    })

    if(totalMinutes >= 60){
      let hours = Math.trunc(totalMinutes/60);
      let minutes = hours*60 - totalMinutes
      
      totalHours += Math.abs(hours)
      
      if(minutes == 0){
        totalMinutes = 0
      } else{
        totalMinutes += Math.abs(minutes)
      } 
    }

    return `${totalHours}:${totalMinutes == 0? '00': totalMinutes}`;
  }

}
