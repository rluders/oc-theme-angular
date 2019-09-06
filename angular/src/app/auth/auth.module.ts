import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// import { AuthHttp } from '@auth0/angular-jwt';
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
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ActivateComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule { }
