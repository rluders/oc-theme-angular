import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { AuthConfigConsts, AuthHttp, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  token: string;

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private authUrl = '/api/auth';  // URL to web api

  constructor(private http: Http) {
    this.token = localStorage.getItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
  }

  loggedIn() {
    return tokenNotExpired();
  }

  login(credentials) {
    const url = `${this.authUrl}/login`;
    return this.http.post(url, JSON.stringify(credentials), this.options)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        let user = response.json() && response.json().user;

        // if (token && user) {
        if (token) {
          this.token = token;

          // localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem(AuthConfigConsts.DEFAULT_TOKEN_NAME, token);

          return true;
        }

        return false;
      });
  }

  logout() {
    this.token = null;
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
  }

  register(credentials) {
    const url = `${this.authUrl}/register`;
    return this.http.post(url, JSON.stringify(credentials), this.options);
  }

  activate(credentials) {
    const url = `${this.authUrl}/account_activation`;
    return this.http.post(url, JSON.stringify(credentials), this.options);
  }

  forgotPassword(credentials) {
    const url = `${this.authUrl}/forgot_password`;
    return this.http.post(url, JSON.stringify(credentials), this.options);
  }

  resetPassword(credentials) {
    const url = `${this.authUrl}/reset_password`;
    return this.http.post(url, JSON.stringify(credentials), this.options);
  }

}
