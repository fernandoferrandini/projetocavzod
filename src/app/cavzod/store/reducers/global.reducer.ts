import {CavzodsState, reducerCavzods} from './cavzods.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface CavzodState {
  cavzods: CavzodsState;
}

export const cavzodReducer: ActionReducerMap<CavzodState> = {
  cavzods: reducerCavzods
}

export const getCavzodState = createFeatureSelector<CavzodState>(
  `cavzod`
);
