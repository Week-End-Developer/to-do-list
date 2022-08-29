import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ConfirmationModule } from 'src/core/services/confirmation/confirmation.module';

@NgModule({
    declarations: [SidebarComponent],
    imports: [
        CommonModule,
        RouterModule,
        ConfirmationModule
    ],
    exports: [SidebarComponent],
    providers: [],
})
export class SidebarModule { }