import {UserInfo} from 'firebase';
import {Action, createReducer, on} from '@ngrx/store';
import {signOutSuccess, updateUserInfo} from '../actions/auth.actions';

export interface AuthState {
  user?: UserInfo;
}

export const initialState: AuthState = {};

const reducer = createReducer(
  initialState,
  on(updateUserInfo, (state, {user: userInfo}) => {
    if (userInfo) {
      return ({...state, user: userInfo});
    } else {
      const {user, ...rest} = state;
      return rest;
    }
  }),

  on(signOutSuccess, ( (state: AuthState) => {
    const {user, ...rest} = state;
    return rest;
  }))
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}

