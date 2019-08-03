import {createAction, props} from '@ngrx/store';
import {Cavzod} from '../../model/cavzod.model';

export const selectCavzod = createAction(
  `[Cavzod] Select cavzod`,
  props<{cavzod: Cavzod}>()
);

export const unselectCavzod = createAction(
  `[Cavzod] Unselect Cavzod`
);

export const createCavzod = createAction(
  '[Cavzod] Create Cavzod.',
  props<{cavzod: Cavzod}>()
);


export const updateCavzod = createAction(
  `[Cavzod] Update Cavzod`,
  props<{cavzod: Cavzod}>()
);

export const deleteCavzod = createAction(
  `[Cavzod] Delete Cavzod`,
  props<{id: number}>()
);

