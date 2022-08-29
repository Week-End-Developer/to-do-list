import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from 'src/app/state/effects';
import { reducersUser } from 'src/app/state/reducer';
import { AuthService } from 'src/core/services/auth.service';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        StoreModule.forFeature('user', reducersUser),
        EffectsModule.forFeature([Effects]),
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatButtonModule,
        MatSelectModule
    ],
    exports: [],
    providers: [AuthService],
})
export class LoginModule { }