import {createAction, props} from '@ngrx/store';
import {UserInfo} from 'firebase';


export const signInEmail = createAction(
  '[Core - Auth] Sign in with Email',
  props<{email: string, password: string}>()
);

export const signInGoogle = createAction(
  '[Core - Auth] Sign in with Google',
);

export const updateUserInfo = createAction(
  '[Core - Auth] Success Signing in',
  props<{ user?: UserInfo }>()
);

export const signOut = createAction(
  '[Core - Auth] Sign out',

);

export const signOutSuccess = createAction(
  '[Core - Auth] Success Signing out',

);
