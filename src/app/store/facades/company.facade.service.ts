import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs';
import { saveCompaniesList, clearCompaniesList } from '../actions/company.actions';
import { Companies } from 'src/app/models/companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyFacadeService {

  companyList$: Observable<Companies>;

  constructor(
    private store: Store<{companyReducer: Companies}>
  ) {
    this.companyList$ = store.pipe(select('companyReducer'));
   }

   saveCompaniesList(payload){
     this.store.dispatch(saveCompaniesList({companiesList: payload}))
   }

   clearCompaniesList(){
    this.store.dispatch(clearCompaniesList());
  }
}
