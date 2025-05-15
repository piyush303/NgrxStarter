import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersReducer } from ".";

const usersFeatureKey = 'users'

const selectUsersState = createFeatureSelector<UsersReducer.UsersState>(
    usersFeatureKey
);

export const selectAllUsers = createSelector(
    selectUsersState,
    (state: UsersReducer.UsersState) => state.users
);