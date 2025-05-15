import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from "./users.model";
import * as UsersActions from './users.actions';

export interface UsersState extends EntityState<User>{
    users: User[];
    selectedUserId: number | null
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
  selectedUserId: null
});

export const reducer = createReducer(
    INITIAL_STATE,
    on(UsersActions.loadUsersSuccess, (state, action) => ( 
      adapter.addMany(action.users, { ...state, selectedUserId: null })
    )),
    on(UsersActions.updateUser, (state, { update }) => {
      console.log('updateUser', update)
      const x = adapter.updateOne(update, state);

      console.log(adapter, state)

      return x
    }),
  );