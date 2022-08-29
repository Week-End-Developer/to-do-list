import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoAccessComponent } from './components/no-access/no-access.component';

const routes: Routes = [
    { path: '', component: NoAccessComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NoAccessRoutingModule { }
