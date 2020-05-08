import { createReducer, on, Action } from '@ngrx/store';
import { saveFlightList, clearFlightList } from '../actions/flight.actions';
import { FlightData, Flight } from '../../models/flight.model';

export interface State{
    origem: string,
    destino: string,
    date: string,
    voos: []
}

export const initialState: State[] = []

const _flightReducer = createReducer(initialState,
    on(saveFlightList, (state: State[], {listData}) => {
        return [...listData]
    }),
    on (clearFlightList, (state: State[]) => {
        return[]
    }));

    export function flightReducer(state: State[] | undefined, action: Action){
        return _flightReducer(state, action);
    }