import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { ConfirmationService } from 'src/core/services/confirmation/services/confirmation.service';

@Component({
    selector: 'app-no-access',
    templateUrl: './no-access.component.html',
    styleUrls: ['./no-access.component.scss']
})
export class NoAccessComponent implements OnInit {


    isLoading = false;

    constructor(
        private _authService: AuthService,
        private _confirmationService: ConfirmationService
    ) { }

    ngOnInit(): void { }


    async onLogoutClick() {
        const result = await this._confirmationService.confirm();
        if (!result) { return; }

        this.isLoading = true;
        this._authService.logout();
    }
}
