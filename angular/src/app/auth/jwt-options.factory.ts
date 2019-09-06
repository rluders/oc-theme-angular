import { Injectable, Inject, Injector } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class JwtOptionsFactory {

    public skipWhenExpired = true;
    public whitelistedDomains: string[];
    public blacklistedRoutes: string[];
    private authService: AuthService;

    constructor(@Inject(localStorage) protected localStorage: any, inj: Injector) {
      setTimeout(() => {
        // https://github.com/angular/angular/issues/18224
        // https://github.com/angular/angular/issues/18224#issuecomment-316951787
          this.authService = inj.get(AuthService);
      });
    }

    public tokenGetter = () => this.localStorage.getItem('access_token');


}
