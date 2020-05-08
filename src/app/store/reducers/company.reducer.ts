import { createReducer, on, Action } from '@ngrx/store';
import { saveCompaniesList, clearCompaniesList } from '../actions/company.actions';

export interface State{
    nome: string,
    aeroporto: string,
    cidade: string
}

export const initialState: State[] = []

const _companyReducer = createReducer(initialState,
    on(saveCompaniesList, (state: State[], {companiesList}) => {
        return [...companiesList]
    }),
    on (clearCompaniesList, (state: State[]) => {
        return[]
    }));

    export function companyReducer(state: State[] | undefined, action: Action){
        return _companyReducer(state, action);
    }