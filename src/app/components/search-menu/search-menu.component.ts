import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SearchData } from 'src/app/models/searchData.model';
import { Companies, datasDisponiveis } from 'src/app/models/companies';
import { FlightFacadeService } from 'src/app/store/facades/flight.facade.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {

  public companies: Companies[];
  public hasOrigem: boolean = true;
  public hasDestino: boolean = true;
  public hasData: boolean = true;
  public selectedFrom: Companies;
  public selectedTo: Companies;
  public date;
  public avaiableDates = datasDisponiveis;

  constructor(
    private _apiService: ApiServiceService,
    private _flightFacade: FlightFacadeService,
    private router: Router,
    ) { 
    this.getCompaniesList();
  }
  ngOnInit(): void {
  }

  getCompaniesList(){
    this._apiService.getCompanies().subscribe(
      companies => this.companies = companies,
      error => alert(error)
    );
  }

  postSearch(){
    let searchData: SearchData = this.createSearchData();
    this._flightFacade.clearFlightList();
    
    this._apiService.postFlightList(searchData).subscribe(
      flightList => {
        this._flightFacade.saveFlightList(flightList)
        this.router.navigate(['flightList']);
      },
      error => alert(error)
    );
  }

  createSearchData(){
    return {
      from: this.selectedFrom.aeroporto,
      to: this.selectedTo.aeroporto,
      date: this.date.date
    }
  }

  validator(){
    if(this.selectedFrom == undefined){
      this.hasOrigem = false
      return
    }else{
      this.hasOrigem = true;
    }
    if(this.selectedTo == undefined){
      this.hasDestino = false
      return
    }else{
      this.hasDestino = true;
    }
    if(this.date == undefined){
      this.hasData = false;
      return
    }else{
      this.hasData = true;
    }
    this.postSearch()
  }

}
