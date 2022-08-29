import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { reducersToDos, reducersUser } from 'src/app/state/reducer';
import { Effects } from 'src/app/state/effects';

@NgModule({
    declarations: [
        ToDoListComponent
    ],
    imports: [
        StoreModule.forFeature('todos', reducersToDos),
        EffectsModule.forFeature([Effects]),
        CommonModule,
        ToDoListRoutingModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [],
    providers: [],
})
export class ToDoListModule { }