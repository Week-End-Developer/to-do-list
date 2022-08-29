import { createReducer, on } from "@ngrx/store";
import { User } from "src/core/models/user.model";
import { AccessInterface } from "../interfaces/access.interface";
import { ToDoListStateInterface } from "../interfaces/to-do-list.state.interface";
import { UserStateInterface } from "../interfaces/user-state.interface";
import * as Actions from './actions';

//
export const initialStateUser: UserStateInterface = {
    isLoading: false,
    error: "",
    user: new User(),
    users: []
}

//
export const initialStateToDoList: ToDoListStateInterface = {
    isLoading: false,
    error: "",
    todos: [],
    success: false
}

export const initialStateAccessList: AccessInterface = {
    isLoading: false,
    error: "",
    accesses: []
}

//
export const reducersUser = createReducer(
    initialStateUser,
    // on(Actions.registerUser, (state) => ({ ...state, isLoading: true })),
    // on(Actions.registerUserSuccess, (state) => ({ ...state, isLoading: false })),
    // on(Actions.registerUserFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),

    on(Actions.loginUser, (state) => ({ ...state, isLoading: true })),
    on(Actions.loginUserSuccess, (state) => ({ ...state, isLoading: false })),
    on(Actions.loginUserFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),

    on(Actions.getUsers, (state) => ({ ...state, isLoading: true })),
    on(Actions.getUsersSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        users: action.users,
    })),
    on(Actions.getUsersFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
);

//
export const reducersToDos = createReducer(
    initialStateToDoList,
    // List Operations
    on(Actions.getToDoList, (state) => ({ ...state, isLoading: true })),
    on(Actions.getToDoListSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        todos: action.todos,
    })),
    on(Actions.getToDoListFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),
    // Update
    on(Actions.updateToDo, (state) => ({ ...state, isLoading: true })),
    on(Actions.updateToDoSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        success: true
    })),
    on(Actions.updateToDoFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
);

//
export const reducersAccesses = createReducer(
    initialStateAccessList,
    on(Actions.getAccessList, (state) => ({ ...state, isLoading: true })),
    on(Actions.getAccessListSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        accesses: action.accesses,
    })),
    on(Actions.getAccessListFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
);

