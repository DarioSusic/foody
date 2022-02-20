import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(module => module.DashboardModule) },
  { path: 'receipts', loadChildren: () => import('./pages/receipts/receipts.module').then(module => module.ReceiptsModule) },
  { path: 'meals', loadChildren: () => import('./pages/meals/meals.module').then(module => module.MealsModule) },

  // { path: 'profile', loadChildren: () => import('./main-page/main-page.module').then(module => module.MainPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
