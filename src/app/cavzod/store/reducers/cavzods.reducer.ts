import {Cavzod} from '../../model/cavzod.model';
import {Action, createReducer, on} from '@ngrx/store';
import {
  createCavzod,
  deleteCavzod,
  selectCavzod,
  unselectCavzod,
  updateCavzod,
  updateCavZodList
} from '../actions/cavzods.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const cavzodAdapter = createEntityAdapter<Cavzod>(
  {
    selectId: cavzod => cavzod.id,
    sortComparer: (a: Cavzod, b: Cavzod) => a.name.localeCompare(b.name),
  });


export interface CavzodsState extends EntityState<Cavzod> {
  cavzod?: Cavzod;
}

const initialState = cavzodAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(updateCavZodList, (state, {cavzods}) => cavzodAdapter.addAll(cavzods, state)),
  on(selectCavzod, (state, {cavzod}) => ({...state, cavzod})),
  on(unselectCavzod, updateCavzod, (state: CavzodsState) => {
    const {cavzod, ...rest} = state;
    return rest;
  }),
  on(createCavzod, (state, {cavzod}) => cavzodAdapter.addOne(cavzod, state)),
  on(deleteCavzod, (state, {id}) => cavzodAdapter.removeOne(id, state))
);

export function reducerCavzods(state: CavzodsState, action: Action) {
  return reducer(state, action);
}
