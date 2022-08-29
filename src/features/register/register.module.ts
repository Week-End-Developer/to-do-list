import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from 'src/core/services/auth.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from 'src/app/state/effects';
import { reducersUser } from 'src/app/state/reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        StoreModule.forFeature('user', reducersUser),
        EffectsModule.forFeature([Effects]),
        CommonModule,
        FormsModule,
        RegisterRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatSelectModule

    ],
    exports: [],
    providers: [AuthService],
})
export class RegisterModule { }