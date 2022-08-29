import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/app-state.interface';
import { errorSelectorUserList, isLoadingSelectorUserList, usersSelector } from 'src/app/state/selectors';
import { User } from 'src/core/models/user.model';
import * as Actions from "../../../../app/state/actions";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    //
    @ViewChild(MatPaginator) paginator?: MatPaginator;

    displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'operations'];
    dataSource = new MatTableDataSource<User>();

    //
    users$?: Observable<Array<User>>;
    isLoading$?: Observable<boolean>;
    error$?: Observable<string | null>;

    constructor(private store: Store<AppStateInterface>) {
        this.isLoading$ = this.store.pipe(select(isLoadingSelectorUserList));
        this.error$ = this.store.pipe(select(errorSelectorUserList));
        this.users$ = this.store.pipe(select(usersSelector));
    }

    //
    ngOnInit(): void {
        this.store.dispatch(Actions.getUsers());
    }

    //
    ngAfterViewInit() {
        this.users$?.pipe().subscribe((data) => {
            this.dataSource = new MatTableDataSource<User>(data);
            this.dataSource.paginator = this.paginator!;
        })
    }

    //
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    //
    onEditClick(user: User) {
        console.log(user);
    }

    //
    onRemoveClick(user: User) {
        console.log(user);
    }

    //
    ngOnDestroy(): void {

    }


}
