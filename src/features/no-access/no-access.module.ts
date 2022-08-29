import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAccessRoutingModule } from './no-access-routing.module';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { ConfirmationModule } from 'src/core/services/confirmation/confirmation.module';

@NgModule({
    declarations: [NoAccessComponent],
    imports: [
        CommonModule,
        NoAccessRoutingModule,
        ConfirmationModule
    ],
    exports: [],
    providers: [],
})
export class NoAccessModule { }