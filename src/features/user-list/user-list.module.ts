import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from 'src/app/state/effects';
import { reducersUser } from 'src/app/state/reducer';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [UserListComponent],
    imports: [
        StoreModule.forFeature('users', reducersUser),
        EffectsModule.forFeature([Effects]),
        CommonModule,
        UserListRoutingModule,
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
export class UserListModule { }