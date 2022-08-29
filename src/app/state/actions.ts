import { createAction, props } from "@ngrx/store";
import { Access } from "src/core/models/access.model";
import { ToDo } from "src/core/models/todo.model";
import { User } from "src/core/models/user.model";
import { LoginStateInterface } from "../interfaces/login-state.interface";

//
// export const registerUser = createAction('[User] Register', props<{ params: User }>());
// export const registerUserSuccess = createAction('[User] Register');
// // export const registerUserSuccess = createAction('[User] Register', props<{ params: User }>());
// export const registerUserFailure = createAction('[User] Register', props<{ error: string }>());

//
export const loginUser = createAction("[User] Login", props<{ params: LoginStateInterface }>());
export const loginUserSuccess = createAction("[User] Login", props<{ params: User }>());
export const loginUserFailure = createAction("[User] Login", props<{ error: string }>());

//
export const getUsers = createAction("[Users] Get Users");
export const getUsersSuccess = createAction("[Users] Get Users Success", props<{ users: Array<User> }>());
export const getUsersFailure = createAction("[Users] Get Users Failure", props<{ error: string }>());

//
export const getToDoList = createAction("[ToDo] Get ToDo List");
export const getToDoListSuccess = createAction("[ToDo] Get ToDo List Success", props<{ todos: Array<ToDo> }>());
export const getToDoListFailure = createAction("[ToDo] Get ToDo List Failure", props<{ error: string }>());

//
export const updateToDo = createAction("[ToDo] Update ToDo ");
export const updateToDoSuccess = createAction("[ToDo] Update ToDo Success", props<{ success: boolean }>());
export const updateToDoFailure = createAction("[ToDo] Update ToDo Failure", props<{ error: string }>());

//
export const removeToDo = createAction("[ToDo] Remove ToDo ");
export const removeToDoSuccess = createAction("[ToDo] Remove ToDo Success", props<{ success: boolean }>());
export const removeToDoFailure = createAction("[ToDo] Remove ToDo Failure", props<{ error: string }>());

//
export const getAccessList = createAction("[Access] Get Access List");
export const getAccessListSuccess = createAction("[Access] Get Access List Success", props<{ accesses: Array<Access> }>());
export const getAccessListFailure = createAction("[Access] Get Access List Failure", props<{ error: string }>());