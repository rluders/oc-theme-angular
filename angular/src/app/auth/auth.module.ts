import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';

import { authHttpServiceFactory } from './auth.factory';
import { AuthHttp } from 'angular2-jwt';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ResetPasswordComponent } from './reset-password.component';
import { ActivateComponent } from './activate.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ActivateComponent
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule { }
