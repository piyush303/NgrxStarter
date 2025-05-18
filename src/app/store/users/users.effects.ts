import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UsersActions from './users.actions'
import { EMPTY, catchError, exhaustMap, map, of, switchMap, withLatestFrom } from "rxjs";
import { UsersService } from "../../users/users.service";
import { User } from "./users.model";

@Injectable()
export class UsersEffects {
    private action$ = inject(Actions);
    private usersService = inject(UsersService);

    loadUsers$ = createEffect(() => {
        return this.action$.pipe(
            ofType(UsersActions.loadUsers),
            switchMap(() => this.usersService.getUsers()
              .pipe(
                map(users =>UsersActions.loadUsersSuccess({ users })),
                catchError(() => EMPTY)
              ))
        )
    });

    updateUsers$ = createEffect(() => {
      return this.action$.pipe(
          ofType(UsersActions.updateUser),
          map((action) => action),
          switchMap((action) => this.usersService.updateUser(action.updatedUser)
            .pipe(
              map((user: User) => UsersActions.updateUserSuccess({ update: {id: user.id, changes: {...user}} })),
              catchError(() => {
                // NOTE - mocking this because PUT request is failing because of CORS issue
                return of(UsersActions.updateUserSuccess({ 
                  update: {id: action.updatedUser.id, changes: {...action.updatedUser}} 
                }))
              })
            ))
      )
  })
}