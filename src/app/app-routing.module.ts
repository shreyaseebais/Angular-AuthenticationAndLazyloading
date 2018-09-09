import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'shared',
    loadChildren: './shared/shared.module#SharedModule'
  },
  {
    path: 'core',
    loadChildren: './core/core.module#CoreModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
