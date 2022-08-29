import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

const routes: Routes = [
    { path: '', component: ToDoListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ToDoListRoutingModule { }
