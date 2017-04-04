import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FullLayoutComponent } from './full-layout.component';
import { AuthLayoutComponent } from './auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AuthLayoutComponent,
    FullLayoutComponent
  ],
  exports: [
    AuthLayoutComponent,
    FullLayoutComponent
  ]
})
export class LayoutModule {}
