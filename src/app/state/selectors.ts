import { AppStateInterface } from "../types/app-state.interface";
import { createSelector } from '@ngrx/store';
import { ToDo } from "src/core/models/todo.model";

export const selectFeature = (state: AppStateInterface) => state;

// User List
export const isLoadingSelectorUserList = createSelector(
    selectFeature,
    (state) => state.users.isLoading
);

export const errorSelectorUserList = createSelector(
    selectFeature,
    (state) => state.users.error
);

export const usersSelector = createSelector(
    selectFeature,
    (state) => state.users.users
);


// To-Do List
export const isLoadingSelectorToDoList = createSelector(
    selectFeature,
    (state) => state.todos ? state.todos.isLoading : false
);
export const errorSelectorToDoList = createSelector(
    selectFeature,
    (state) => state.todos.error
);
export const toDosSelector = createSelector(
    selectFeature,
    (state) => state.todos ? state.todos.todos : []
);

export const updateToDoSelector = (toDo: ToDo) => createSelector(
    selectFeature,
    (state) => state.todos.success
);
export const removeToDoSelector = createSelector(
    selectFeature,
    (state) => state.todos.success
);

// Access List
export const isLoadingSelectorAccessList = createSelector(
    selectFeature,
    (state) => state.accesses.isLoading
);

export const errorSelectorAccessList = createSelector(
    selectFeature,
    (state) => state.accesses.error
);

export const accessesSelector = createSelector(
    selectFeature,
    (state) => state.accesses.accesses
);
