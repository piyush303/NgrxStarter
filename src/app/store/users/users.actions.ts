import { createAction, props } from "@ngrx/store";
import { User } from "./users.model";
import { Update } from "@ngrx/entity";

export const loadUsers = createAction(
  '[Users] Load Users',
);

export const loadUsersSuccess = createAction(
    '[Users] Load Users Success',
    props<{ users: User[] }>()
);

export const updateUser = createAction(
  '[Users] Update User', 
  props<{ updatedUser: User }>()
);

export const updateUserSuccess = createAction(
  '[Users] Update User Success', 
  props<{ update: Update<User> }>()
);