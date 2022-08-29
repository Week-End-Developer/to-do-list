import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';
import { SidebarModule } from 'src/shared/side-bar/side-bar.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SidebarModule,
    ],
    exports: [],
    providers: [],
})
export class DashboardModule { }