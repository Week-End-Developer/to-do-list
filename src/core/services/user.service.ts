import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model';
import { delay, firstValueFrom, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Access } from '../models/access.model';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    //
    constructor(
        private _httpClient: HttpClient
    ) { }

    //
    getUsers(): Observable<Array<User>> {
        return this._httpClient.get<Array<User>>(environment.apiUrl + '/users').pipe(delay(1000));
    }

    //
    user(): Promise<User> {
        const userStr = localStorage.getItem("user");
        if (userStr)
            return JSON.parse(userStr);
        else
            return null;
    }

    //
    async checkUserAccessToPage(path: string) {
        const user = await this.user();

        if (!user)
            return false;
        else if (user.userType == 1)
            return true;

        const resultEmailUser = await firstValueFrom(this._httpClient.get<Array<Access>>(environment.apiUrl + '/accesses?userType=' + user.userType));
        if (resultEmailUser) {
            const res = resultEmailUser.find(x => x.path == path);
            return res ? true : false;
        }
        else
            return false;
    }

}