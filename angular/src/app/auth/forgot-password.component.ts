import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./auth.module.scss', './forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  user: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.user = formBuilder.group({
        "email": ['', Validators.required]
      });
    }

  ngOnInit() { }

  onSubmit({value, valid}: {value: Object, valid: boolean}) {
    this.authService.forgotPassword(value)
      .subscribe(result => {
        this.router.navigate(['/auth/login']);
      });
  }

}
