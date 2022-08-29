import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ConfirmationService } from './services/confirmation.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ConfirmationComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [],
    providers: [ConfirmationService],
})
export class ConfirmationModule { }