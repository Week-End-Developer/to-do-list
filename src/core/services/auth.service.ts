import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model';
import { firstValueFrom, Observable } from 'rxjs';
import { LoginStateInterface } from 'src/app/interfaces/login-state.interface';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router';
import { RegisterResultEnum } from '../enums/enums.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    //
    constructor(
        private _httpClient: HttpClient,
        private _router: Router
    ) { }

    //
    async register(user: User): Promise<RegisterResultEnum> {
        try {
            const resultEmailUser = await firstValueFrom(this._httpClient.get<any>(environment.apiUrl + '/users?email=' + user.email))

            if (resultEmailUser && resultEmailUser[0])
                return RegisterResultEnum.emailUsing;
            else {
                const res = await firstValueFrom(this._httpClient.post<User>(environment.apiUrl + '/users', user));
                if (res)
                    return RegisterResultEnum.done;
                else
                    return RegisterResultEnum.error;
            }

        } catch (error) {
            console.warn(error);
            return RegisterResultEnum.error;
        }
    }

    //
    async login(model: LoginModel): Promise<boolean> {
        try {


            const resultEmailUser = await firstValueFrom(this._httpClient.get<Array<User>>(environment.apiUrl + '/users?email=' + model.email));

            console.log(resultEmailUser);


            if (!resultEmailUser || (resultEmailUser && resultEmailUser.length != 1)) {
                return false;
            }

            // const resultPasswordUser = await firstValueFrom(this._httpClient.get<any>(environment.apiUrl + '/users?password=' + resultEmailUser[0].password));

            if (resultEmailUser && resultEmailUser[0] && resultEmailUser[0].password == model.password) {
                localStorage.setItem('accessToken', "123");
                localStorage.setItem('user', JSON.stringify(resultEmailUser[0]));
                this._router.navigateByUrl('/dashboard').then()
            } else {
                return false;
            }


            // if (!resultPasswordUser || (resultPasswordUser && resultPasswordUser.length != 1)) {
            //     return false;
            // } else if (resultEmailUser[0].id == resultPasswordUser[0].id) {
            //     localStorage.setItem('accessToken', "123");
            //     localStorage.setItem('user', JSON.stringify(resultEmailUser[0]));
            //     this._router.navigateByUrl('/dashboard').then()
            //     // return true;
            // } else {
            //     return false;
            // }

        } catch (error) {
            console.warn(error);
            return false;
        }
    }

    //
    async logout(): Promise<boolean> {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        this._router.navigateByUrl('/login').then()
        return true;
    }
}