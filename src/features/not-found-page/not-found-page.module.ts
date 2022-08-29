import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './components/404/error404.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';

@NgModule({
    declarations: [
        Error404Component
    ],
    imports: [
        CommonModule,
        NotFoundPageRoutingModule
    ],
    exports: [],
    providers: [],
})
export class NotFoundPageModule { }