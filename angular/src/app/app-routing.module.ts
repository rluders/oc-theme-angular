import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Auth
import { AuthGuardService } from './auth/auth-guard.service';

// Layouts
import { FullLayoutComponent } from './layout/full-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout.component';

export const routes : Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    data: {
      title: 'Authentication'
    },
    children: [
      {
        path: '',
        loadChildren: 'app/auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        data: {
          title: 'Dashboard',
          description: 'Welcome to OctomerCMS + Angular2!'
        },
        children: [
          {
            path: '',
            loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
