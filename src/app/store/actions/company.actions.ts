import {createAction, props} from '@ngrx/store';
import { Companies } from 'src/app/models/companies';

export const saveCompaniesList = createAction('[Search Component] SaveCompanies', props<{companiesList: Companies[]}>());
export const clearCompaniesList = createAction('[Search Component] ClearCompanies');