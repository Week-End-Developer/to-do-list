import { AccessInterface } from "../interfaces/access.interface";
import { ToDoListStateInterface } from "../interfaces/to-do-list.state.interface";
import { UserStateInterface } from "../interfaces/user-state.interface";

export interface AppStateInterface {
    users?: UserStateInterface;
    todos?: ToDoListStateInterface;
    accesses?: AccessInterface;
}