import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationService {

    //
    constructor(public dialog: MatDialog) { }

    //
    async confirm(): Promise<boolean> {
        const dialogRef = this.dialog.open(ConfirmationComponent, {
        })

        return dialogRef.afterClosed().toPromise().then(
            result => {
                return Promise.resolve(result);
            }
        )
    }
}