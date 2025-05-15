import { createReducer, on } from "@ngrx/store";
import { User } from "./users.model";
import * as UsersActions from './users.actions';

export interface UsersState {
    users: User[]
}

export const INITIAL_STATE: UsersState = {
    users: []
}

export const reducer = createReducer(
    INITIAL_STATE,
    on(UsersActions.loadUsersSuccess, (state, action) => ({
      ...state,
      users: action.users,
    })),
  );