import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterResultEnum } from 'src/core/enums/enums.model';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    //
    @ViewChild("form") form?: NgForm;

    isLoading = false;
    error: string;

    //
    public model: User = {
        email: "ahmet@ahmet.com",
        name: "Ahmet",
        surname: "Mehmet",
        password: "Ahmet123",
        userType: 3
    };
    public passwordConfirm?: string = "Ahmet123";

    //
    isPasswordVisible: boolean = false;

    //
    constructor(
        private _router: Router,
        private _authService: AuthService
    ) { }

    //
    ngOnInit(): void {

    }

    //
    onSigninClick() {
        this._router.navigateByUrl('/login').then();
    }

    //
    async onNextClick() {
        this.isLoading = true;
        this.error = undefined;
        const result = await this._authService.register(this.model);

        if (result == RegisterResultEnum.emailUsing)
            this.error = "This e-mail address is used.";
        else if (result == RegisterResultEnum.done)
            this._router.navigateByUrl('/login?email=' + this.model.email).then();

        this.isLoading = false;
    }

}
