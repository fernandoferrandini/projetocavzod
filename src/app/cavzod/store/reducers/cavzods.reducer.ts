import {Cavzod} from '../../model/cavzod.model';
import {Action, createReducer, on} from '@ngrx/store';
import {createCavzod, deleteCavzod, selectCavzod, unselectCavzod, updateCavzod} from '../actions/cavzods.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const cavzodAdapter = createEntityAdapter<Cavzod>(
  {
    selectId: cavzod => cavzod.id,
    sortComparer: (a: Cavzod, b: Cavzod) => a.name.localeCompare(b.name),
  });


export interface CavzodsState extends EntityState<Cavzod> {
  cavzod?: Cavzod;
}

// soh um POG para ver algo na tela ... depois tirar isso e descomentar linha inititalState abaixo.
const pog =  [
  {id: 1, name: `Seiya`},
  {id: 2, name: `Ikki`},
  {id: 3, name: `Aioria`},
]

const initialState =  cavzodAdapter.addAll(pog, cavzodAdapter.getInitialState());

// const initialState = cavzodAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(selectCavzod, (state, {cavzod}) => ({...state, cavzod})),
  on(unselectCavzod, (state: CavzodsState) => {
    const {cavzod, ...rest} = state;
    return rest;
  }),
  on(createCavzod, (state, {cavzod}) => cavzodAdapter.addOne(cavzod, state)),
  on(updateCavzod, (state, {cavzod}) => cavzodAdapter.updateOne({id: cavzod.id, changes: cavzod}, state)),
  on(deleteCavzod, (state, {id}) => cavzodAdapter.removeOne(id, state))
);

export function reducerCavzods(state: CavzodsState, action: Action) {
  return reducer(state, action);
}
