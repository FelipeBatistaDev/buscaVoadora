import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators'
import { companies } from '../models/companies';
import { searchData } from '../models/searchData.model';
import { flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  private apiPath: string = 'https://api-voadora.dev.tegra.com.br/flight/'

  getCompanies(): Observable<companies[]> {
    return this._http.get(`${this.apiPath + 'companies'}`).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCompanies)
    )
  }

  postFlightList(flightData: searchData) {
    return this._http.post(this.apiPath, flightData).pipe(
      catchError(this.handleError),
      map(this.jsonDataToFlightList)
    )
  }

  //#region Data Generic Treatment Json to Model
  private jsonDataToCompanies(jsonData: any[]): companies[] {
    const companies: companies[] = [];
    jsonData.forEach(element => companies.push(element as companies));

    return companies;
  }

  
  private jsonDataToFlightList(jsonData: any[]): flight[] {
    const flightList: flight[] = [];
    jsonData.forEach(element => flightList.push(element as flight));

    return flightList;
  }

  private handleError(error: any): Observable<any> {
    console.log("erro na requisição", error);
    return throwError(error);
  }
//#endregion

}
