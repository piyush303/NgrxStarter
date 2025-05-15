import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UsersActions from './users.actions'
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { UsersService } from "../../users/users.service";

@Injectable()
export class UsersEffects {
    private action$ = inject(Actions);
    private usersService = inject(UsersService);

    loadUsers$ = createEffect(() => {
        return this.action$.pipe(
            ofType(UsersActions.loadUsers),
            exhaustMap(() => this.usersService.getUsers()
          .pipe(
            map(users =>UsersActions.loadUsersSuccess({ users })),
            catchError(() => EMPTY)
          ))
        )
    })
}