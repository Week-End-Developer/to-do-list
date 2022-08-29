import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, Observable, of } from 'rxjs';
import { Access } from '../models/access.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AccessService {

    //
    constructor(
        private _httpClient: HttpClient
    ) { }

    //
    getAccessList(): Observable<Array<Access>> {
        return this._httpClient.get<Array<Access>>(environment.apiUrl + '/accesses').pipe(delay(1000));
    }

}