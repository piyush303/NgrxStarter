import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersReducer } from ".";
import { UsersState, adapter } from "./users.reducer";

const usersFeatureKey = 'users'

const selectUsersState = createFeatureSelector<UsersReducer.UsersState>(
    usersFeatureKey
);

const getSelectedUserId = (state: UsersState) => state.selectedUserId;

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

export const selectCurrentUserId = createSelector(
    selectUsersState,
    getSelectedUserId
);

export const selectCurrentUser = createSelector(
    selectUserEntities,
    selectCurrentUserId,
    (userEntities, userId) => userId && userEntities[userId]
);