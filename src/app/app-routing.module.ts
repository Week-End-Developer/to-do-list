import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'register',
    loadChildren: () => import('../features/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'error-404',
    loadChildren: () => import('../features/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  },
  {
    path: 'no-access',
    loadChildren: () => import('../features/no-access/no-access.module').then(m => m.NoAccessModule)
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
