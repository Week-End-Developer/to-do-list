import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

    //
    constructor(
        private _dialogRef: MatDialogRef<ConfirmationComponent>
    ) { }

    //
    ngOnInit(): void { }

    //
    onClick(result: boolean) {
        this._dialogRef.close(result);
    }
}
