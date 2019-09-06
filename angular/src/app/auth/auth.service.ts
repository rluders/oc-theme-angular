import { map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class AuthService {
  token: string;

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  private authUrl = 'api/auth';  // URL to web api

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.token = localStorage.getItem('access_token');
  }

  getToken() {
    return this.token;
  }

  loggedIn() {
    return this.jwtHelper.isTokenExpired();
  }

  login(credentials) {
    const url = `${this.authUrl}/login`;
    return this.http.post(url, JSON.stringify(credentials), { headers: this.headers }).pipe(
      map((response: any) => {
        /* let token = response.json() && response.json().token;
        let user = response.json() && response.json().user; */
        const token = response.token;

        // if (token && user) {
        if (token) {
          this.token = token;

          // localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('access_token', token);

          return true;
        }

        return false;
      }));
  }

  logout() {
    this.token = null;
    localStorage.removeItem('access_token');
  }

  register(credentials) {
    const url = `${this.authUrl}/register`;
    return this.http.post(url, JSON.stringify(credentials), { headers: this.headers });
  }

  activate(credentials) {
    const url = `${this.authUrl}/account_activation`;
    return this.http.post(url, JSON.stringify(credentials), { headers: this.headers });
  }

  forgotPassword(credentials) {
    const url = `${this.authUrl}/forgot_password`;
    return this.http.post(url, JSON.stringify(credentials), { headers: this.headers });
  }

  resetPassword(credentials) {
    const url = `${this.authUrl}/reset_password`;
    return this.http.post(url, JSON.stringify(credentials), { headers: this.headers });
  }

}
