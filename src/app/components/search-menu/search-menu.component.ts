import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { searchData } from 'src/app/models/searchData.model';
import { companies } from 'src/app/models/companies';
import { error } from 'protractor';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements OnInit {

  public companies: companies[];
  public selectedFrom: companies;
  public selectedTo: companies;
  public date;
  public avaiableDates = [{date: '2019-02-10'},{date:'2019-02-11'},{date:'2019-02-12'},{date:'2019-02-13'},{date:'2019-02-14'},{date:'2019-02-15'},{date:'2019-02-16'},{date:'2019-02-17'},{date:'2019-02-18'}];

  constructor(private _apiService: ApiServiceService) { 
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
    let searchData: searchData = this.createSearchData();
    this._apiService.postFlightList(searchData).subscribe(
      flightList => console.log(flightList),
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
