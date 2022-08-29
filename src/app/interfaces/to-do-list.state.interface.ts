import { ToDo } from "src/core/models/todo.model";

export interface ToDoListStateInterface {
    isLoading?: boolean;
    error?: string;
    email?: string;
    todos?: Array<ToDo>;
    success?: boolean;
    todo?: ToDo;
}