import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SearchData } from 'src/app/models/searchData.model';
import { Companies } from 'src/app/models/companies';
import { FlightFacadeService } from 'src/app/store/facades/flight.facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {

  public companies: Companies[];
  public selectedFrom: Companies;
  public selectedTo: Companies;
  public date;
  public avaiableDates = [{date: '2019-02-10'},{date:'2019-02-11'},{date:'2019-02-12'},{date:'2019-02-13'},{date:'2019-02-14'},{date:'2019-02-15'},{date:'2019-02-16'},{date:'2019-02-17'},{date:'2019-02-18'}];

  constructor(
    private _apiService: ApiServiceService,
    private _flightFacade: FlightFacadeService,
    private router: Router
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

}
