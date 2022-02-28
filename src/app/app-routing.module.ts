import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(module => module.DashboardModule) },
  { path: 'receipts', loadChildren: () => import('./pages/receipts/receipts.module').then(module => module.ReceiptsModule) },
  { path: 'meals', loadChildren: () => import('./pages/meals/meals.module').then(module => module.MealsModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(module => module.ProfileModule) },
  { path: 'register', loadChildren: () => import('./pages/profile/register/register.module').then(module => module.RegisterModule) },
  { path: 'login', loadChildren: () => import('./pages/profile/login/login.module').then(module => module.LoginModule) },

  // { path: 'profile', loadChildren: () => import('./main-page/main-page.module').then(module => module.MainPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
