import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators'
import { Companies } from '../models/companies';
import { SearchData } from '../models/searchData.model';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  private apiPath: string = 'https://api-voadora.dev.tegra.com.br/flight/'

  getCompanies(): Observable<Companies[]> {
    return this._http.get(`${this.apiPath + 'companies'}`).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCompanies)
    )
  }

  postFlightList(flightData: SearchData) {
    return this._http.post(this.apiPath, flightData).pipe(
      catchError(this.handleError),
      map(this.jsonDataToFlightList)
    )
  }

  //#region Data Generic Treatment Json to Model
  private jsonDataToCompanies(jsonData: any[]): Companies[] {
    const companies: Companies[] = [];
    jsonData.forEach(element => companies.push(element as Companies));

    return companies;
  }

  
  private jsonDataToFlightList(jsonData: any[]): Flight[] {
    const flightList: Flight[] = [];
    jsonData.forEach(element => flightList.push(element as Flight));

    return flightList;
  }

  private handleError(error: any): Observable<any> {
    console.log("erro na requisição", error);
    return throwError(error);
  }
//#endregion

}
