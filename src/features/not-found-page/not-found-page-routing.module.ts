import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Error404Component } from './components/404/error404.component';

const routes: Routes = [
    { path: '', component: Error404Component },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotFoundPageRoutingModule { }
