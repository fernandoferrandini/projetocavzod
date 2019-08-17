import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {EMPTY, from, of} from 'rxjs';
import {signInEmail, signInGoogle, signOut, signOutSuccess, updateUserInfo} from '../actions/auth.actions';
import {catchError, exhaustMap, map, mapTo, switchMap, switchMapTo} from 'rxjs/operators';
import {auth} from 'firebase/app';
import {showSnackBar} from '../actions/core.actions';


@Injectable()
export class AuthEffects {

  signInEmail$ = createEffect( () => this.action$.pipe(
      ofType(signInEmail),
      exhaustMap(({email, password}) => from(
      this.authFire.auth.signInWithEmailAndPassword(email, password)).pipe(
        switchMapTo(EMPTY),
        catchError((error: auth.Error) => of(showSnackBar({
          message: error.message,
          config: {
            duration: 5000
          }
        })))
        )
      )
  ));

  updateUserInfo$ = createEffect(() => this.authFire.user.pipe(
    map(user => {
      if (user) {
        const {uid, displayName, email, phoneNumber, photoURL, providerId} = user;
        return updateUserInfo({ user: {uid, displayName, email, phoneNumber, photoURL, providerId}});
      }
      return updateUserInfo({});
    })
  ));

  signInGoogle$ = createEffect(() => this.action$.pipe(
    ofType(signInGoogle),
    exhaustMap(() => from(
      this.authFire.auth.signInWithPopup(new auth.GoogleAuthProvider())
    ).pipe(
      switchMapTo(EMPTY),
      catchError((error: auth.Error) => of(showSnackBar({
        message: error.message,
        config: {
          duration: 5000
        }
      })))
    )),
  ));

  signOut$ = createEffect( () => this.action$.pipe(
    ofType(signOut),
    exhaustMap( () => from(
      this.authFire.auth.signOut()
    ).pipe(
        mapTo(signOutSuccess()),
    ))
  ), {dispatch: false})

  constructor(private action$: Actions, private authFire: AngularFireAuth) {
  }
}
