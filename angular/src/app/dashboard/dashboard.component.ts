import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    protected router: Router,
    protected auth: AuthService
  ) {}

  ngOnInit(): void {}

  doLogout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

}
