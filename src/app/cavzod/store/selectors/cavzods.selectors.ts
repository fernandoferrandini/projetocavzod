import {createSelector} from '@ngrx/store';
import {getCavzodState} from '../reducers/global.reducer';
import {cavzodAdapter} from '../reducers/cavzods.reducer';

export const getCavzodsState = createSelector(
  getCavzodState,
  state => state.cavzods
);

export const getAllCavzods =  createSelector(
  getCavzodsState,
  state => cavzodAdapter.getSelectors().selectAll(state)
);

export const getSelectCavzod = createSelector(
  getCavzodsState,
  state => state.cavzod
)


