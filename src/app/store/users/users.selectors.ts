import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersReducer } from ".";
import { UsersState, adapter } from "./users.reducer";

const usersFeatureKey = 'users'

const selectUsersState = createFeatureSelector<UsersReducer.UsersState>(
    usersFeatureKey
);

const getSelectedUserId = (state: UsersState) => state.selectedUser?.id;

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();

export const selectUserEntities = createSelector(
    selectUsersState,
    selectEntities
);

export const selectAllUsers = createSelector(
    selectUsersState,
    selectAll
);

export const selectSelectedUser = createSelector(
    selectUsersState,
    (state: UsersState) => state.selectedUser
)
