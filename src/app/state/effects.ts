import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map, mergeMap, of, switchMap, tap } from "rxjs";
import { User } from "src/core/models/user.model";
import { AccessService } from "src/core/services/access.service";
import { AuthService } from "src/core/services/auth.service";
import { ToDoListService } from "src/core/services/to-to-list.service";
import { UserService } from "src/core/services/user.service";
import * as Actions2 from './actions'

@Injectable()
export class Effects {

    //
    constructor(
        private _router: Router,
        private actions$: Actions,
        private _userService: UserService,
        private _authService: AuthService,
        private _accessService: AccessService,
        private _toDoListService: ToDoListService,
    ) { }

    // 2. Way
    // register$ = createEffect(() => this.actions$.pipe(
    //     ofType(Actions2.registerUser),
    //     mergeMap(action => this._authService.register(action.params).pipe(delay(2000),
    //         map(() => {
    //             Actions2.registerUserSuccess()
    //             localStorage.setItem("register", "true");
    //             this._router.navigateByUrl('/login').then()
    //         }),
    //         catchError(async (error) => Actions2.registerUserFailure({ error }))
    //     ))
    // ), { dispatch: false });


    // login$ = createEffect(() => this.actions$.pipe(
    //     ofType(Actions2.loginUser),
    //     mergeMap(action => this._authService.login(action.params).pipe(
    //         map((params) => {
    //             localStorage.setItem("user", JSON.stringify(params));
    //             this._router.navigateByUrl('/home').then()
    //         }),
    //         catchError(async (error) => Actions2.loginUserFailure({ error }))
    //     ))
    // ), { dispatch: false });

    //
    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Actions2.getUsers),
            mergeMap(() => {
                return this._userService.getUsers().pipe(
                    map((users) => Actions2.getUsersSuccess({ users })),
                    catchError((error) =>
                        of(Actions2.getUsersFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    //
    getToDoList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Actions2.getToDoList),
            mergeMap(() => {
                return this._toDoListService.getToDos().pipe(
                    map((todos) => Actions2.getToDoListSuccess({ todos })),
                    catchError((error) =>
                        of(Actions2.getToDoListFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    //
    // updateToDo$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(Actions2.updateToDo),
    //         mergeMap(() => {
    //             return this._toDoListService.getToDos().pipe(
    //                 map((todos) => Actions2.getToDoListSuccess({ todos })),
    //                 catchError((error) =>
    //                     of(Actions2.getToDoListFailure({ error: error.message }))
    //                 )
    //             );
    //         })
    //     )
    // );

    //
    getAccessList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Actions2.getAccessList),
            mergeMap(() => {
                return this._accessService.getAccessList().pipe(
                    map((accesses) => Actions2.getAccessListSuccess({ accesses })),
                    catchError((error) =>
                        of(Actions2.getAccessListFailure({ error: error.message }))
                    )
                );
            })
        )
    );

};