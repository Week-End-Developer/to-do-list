import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Effects } from 'src/app/state/effects';
import { reducersAccesses } from 'src/app/state/reducer';
import { AccessComponent } from './components/access/access.component';
import { AccessRoutingModule } from './access-routing.module';

@NgModule({
    declarations: [AccessComponent],
    imports: [
        StoreModule.forFeature('accesses', reducersAccesses),
        EffectsModule.forFeature([Effects]),
        CommonModule,
        AccessRoutingModule,
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
export class AccessModule { }