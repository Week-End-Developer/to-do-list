import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/core/services/auth.service';
import { LoginModel } from 'src/core/models/login.model';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLoading = false;
    error = false;

    //
    loginModel: LoginModel = {
        email: "ahmet@ahmet.com",
        password: "Ahmet123"
    }

    //
    constructor(
        private store: Store,
        private _router: Router,
        private _route: ActivatedRoute,
        private _authService: AuthService,
    ) { }

    //
    ngOnInit(): void {
        const directedMail = this._route.snapshot.queryParamMap.get('email');
        if (directedMail)
            this.loginModel.email = directedMail;
    }

    //
    onCreateAccountClick() {
        this._router.navigateByUrl('/register').then()
    }

    async onNextClick() {
        this.isLoading = true;
        this.error = undefined;
        const result = await this._authService.login(this.loginModel);
        if (result == false)
            this.error = true;

        this.isLoading = false;
    }
}
