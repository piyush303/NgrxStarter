import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from "./users.model";
import * as UsersActions from './users.actions';

export interface UsersState extends EntityState<User>{
    users: User[];
    selectedUser: User | undefined
}

export function selectUserId(a: User): number {
  //In this case this would be optional since primary key is id
  return a.id;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId
});

export const INITIAL_STATE: UsersState = adapter.getInitialState({
  users: [],
  selectedUser: undefined
});

export const reducer = createReducer(
    INITIAL_STATE,
    on(UsersActions.loadUsersSuccess, (state, action) => ( 
      adapter.addMany(action.users, { ...state, selectedUserId: null })
    )),

    on(UsersActions.updateUserSuccess, (state, { update }) => {
      return adapter.updateOne(update, state)
    }),

  );