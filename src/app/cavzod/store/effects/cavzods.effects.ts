import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Cavzod} from '../../model/cavzod.model';
import {catchError, concatMap, map, switchMap} from 'rxjs/operators';
import {updateCavZodList, updateCavzod} from '../actions/cavzods.actions';
import {navigateTo} from '../../../store/actions/app.actions';
import {from, of} from 'rxjs';
import {showSnackBar} from '../../../core/store/actions/core.actions';

@Injectable()
export class CavzodsEffects {

  updateCavZodList$ = createEffect(() => this.firestore.collection<Cavzod>('cavalheiros').valueChanges().pipe(
    map( cavzods => updateCavZodList({cavzods})),
  ));

  updateCavzod$ = createEffect((() => this.actions$.pipe(
    ofType(updateCavzod),
    switchMap(action =>
      from(this.firestore.doc(`cavalheiros/${action.cavzod.id}`).set(action.cavzod)).pipe(
        concatMap( () => from([
          navigateTo({commands: ['core', 'layout', 'cavzod']}),
          showSnackBar({message: `${action.cavzod.name} updated.`, config: {} })
        ])),
        catchError(() => of(showSnackBar({message: 'Ops, something goes wrong.', config: { duration: 5000}})))

        )

      )

    )));

  constructor(private actions$: Actions, private firestore: AngularFirestore) {}
}
