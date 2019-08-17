import {createAction, props} from '@ngrx/store';
import {MatSnackBarConfig} from '@angular/material';
import {Cavzod} from '../../../cavzod/model/cavzod.model';

export const showSnackBar = createAction(
  '[App] Show snack bar.',
  props<{ message, config: MatSnackBarConfig}>()
);


