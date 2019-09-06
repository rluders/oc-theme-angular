import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Application modules
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';

// JWT Auth modules
import { JwtModule } from '@auth0/angular-jwt';
// import { JwtOptionsFactory } from './auth/jwt-options.factory';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    // Jwt Token Injection
    JwtModule.forRoot({
      /* jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useClass: JwtOptionsFactory,
      } */
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
}
