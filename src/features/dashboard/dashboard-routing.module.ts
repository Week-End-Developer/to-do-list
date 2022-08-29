import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { AuthGuard } from 'src/core/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'user-list',
                canActivate: [AuthGuard],
                loadChildren: () => import('../../features/user-list/user-list.module').then(m => m.UserListModule)
            },
            {
                path: 'to-do-list',
                canActivate: [AuthGuard],
                loadChildren: () => import('../../features/to-do-list/to-do-list.module').then(m => m.ToDoListModule)
            },
            {
                path: 'access',
                canActivate: [AuthGuard],
                loadChildren: () => import('../../features/access/access.module').then(m => m.AccessModule)
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
