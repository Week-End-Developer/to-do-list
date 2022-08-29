import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { errorSelectorToDoList, isLoadingSelectorToDoList, toDosSelector } from 'src/app/state/selectors';
import { AppStateInterface } from 'src/app/types/app-state.interface';
import { ToDo } from 'src/core/models/todo.model';
import * as Actions from "../../../../app/state/actions";

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
    //
    @ViewChild(MatPaginator) paginator?: MatPaginator;

    displayedColumns: string[] = ['id', 'description', 'status', 'operations'];
    dataSource = new MatTableDataSource<ToDo>();

    //
    todos$?: Observable<Array<ToDo>>;
    isLoading$?: Observable<boolean>;
    error$?: Observable<string | null>;

    constructor(private store: Store<AppStateInterface>) {
        this.isLoading$ = this.store.pipe(select(isLoadingSelectorToDoList));
        this.error$ = this.store.pipe(select(errorSelectorToDoList));
        this.todos$ = this.store.pipe(select(toDosSelector));
    }

    //
    ngOnInit(): void {
        this.store.dispatch(Actions.getToDoList());
    }

    //
    ngAfterViewInit() {
        this.todos$?.pipe().subscribe((data) => {
            this.dataSource = new MatTableDataSource<ToDo>(data);
            this.dataSource.paginator = this.paginator!;
        })
    }

    //
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    //
    onDoneClick(user: ToDo) {
        console.log(user);
    }

    //
    onRemoveClick(user: ToDo) {
        console.log(user);
    }

    //
    ngOnDestroy(): void {

    }

}
