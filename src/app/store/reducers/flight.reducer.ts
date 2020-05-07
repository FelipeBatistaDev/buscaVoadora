import { createReducer, on, Action } from '@ngrx/store';
import { saveFlightList, clearFlightList } from '../actions/flight.actions';
import { FlightData } from '../../models/flight.model';

export interface State {
    origem: string,
    destino: string,
    date: string,
    voos: FlightData[]
}

export const initialState: State[] = [{
    origem: '',
    destino: '',
    date: '',
    voos: []
}]

const _flightReducer = createReducer(initialState,
    on(saveFlightList, (state: State[], { listData }) => {
        return {
            ...listData
        }
    }),
    on (clearFlightList, (state: State[]) => {
        return{...state,
            origem: '',
            destino: '',
            date: '',
            voos: []
        }
    }));

    export function flightReducer(state: State[] | undefined, action: Action){
        return _flightReducer(state, action);
    }