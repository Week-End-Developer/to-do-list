import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model';
import { delay, Observable, of } from 'rxjs';
import { LoginStateInterface } from 'src/app/interfaces/login-state.interface';
import { ToDo } from '../models/todo.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ToDoListService {

    //
    constructor(
        private _httpClient: HttpClient
    ) { }

    //
    getToDos(): Observable<Array<ToDo>> {
        return this._httpClient.get<Array<ToDo>>(environment.apiUrl + '/todos').pipe(delay(1000));
    }

    //
    updateToDo(toDo: ToDo): Observable<any> {
        const res = this._httpClient.put<any>(environment.apiUrl + '/todos', toDo.id);
        return res;
    }

    //
    deleteToDo(toDo: ToDo): Observable<any> {
        const res = this._httpClient.put<any>(environment.apiUrl + '/todos', toDo.id);
        return res;
    }

}