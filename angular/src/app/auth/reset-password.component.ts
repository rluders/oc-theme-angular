import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './reset-password.component.html',
  styleUrls: ['./auth.module.scss', './reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  credentials: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.credentials = formBuilder.group({
      'reset_password_code': [''],
      'password': ['', Validators.required],
      'password_confirmation': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.credentials.controls['reset_password_code'].setValue(params['code']);
      });
  }

  onSubmit({value, valid}: {value: Object, valid: boolean}) {
    this.authService.resetPassword(value)
      .subscribe(result => {
        this.router.navigate(['/auth/login']);
      });
  }

}
