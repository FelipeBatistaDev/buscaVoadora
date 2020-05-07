import {createAction, props} from '@ngrx/store';
import { Flight } from '../../models/flight.model';

export const saveFlightList = createAction('[Search Component] SaveList', props<{listData: Flight[]}>());
export const clearFlightList = createAction('[Search Component] ClearList');