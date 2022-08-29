import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { accessesSelector, errorSelectorAccessList, isLoadingSelectorAccessList } from 'src/app/state/selectors';
import { AppStateInterface } from 'src/app/types/app-state.interface';
import { Access } from 'src/core/models/access.model';
import * as Actions from "../../../../app/state/actions";

@Component({
    selector: 'app-access',
    templateUrl: './access.component.html',
    styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

    //
    @ViewChild(MatPaginator) paginator?: MatPaginator;

    displayedColumns: string[] = ['id', 'path', 'userType', 'operations'];
    dataSource = new MatTableDataSource<Access>();

    //
    accesses$?: Observable<Array<Access>>;
    isLoading$?: Observable<boolean>;
    error$?: Observable<string | null>;

    //
    constructor(private store: Store<AppStateInterface>) {
        this.isLoading$ = this.store.pipe(select(isLoadingSelectorAccessList));
        this.error$ = this.store.pipe(select(errorSelectorAccessList));
        this.accesses$ = this.store.pipe(select(accessesSelector));
    }

    //
    ngOnInit(): void {
        this.store.dispatch(Actions.getAccessList());
    }

    //
    ngAfterViewInit() {
        this.accesses$?.pipe().subscribe((data) => {
            this.dataSource = new MatTableDataSource<Access>(data);
            this.dataSource.paginator = this.paginator!;
        })
    }

    //
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    //
    onEditClick(access: Access) {
        console.log(access);
    }

    //
    onRemoveClick(access: Access) {
        console.log(access);
    }

    //
    ngOnDestroy(): void {

    }
}
