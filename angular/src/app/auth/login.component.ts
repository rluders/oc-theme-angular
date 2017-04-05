import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./auth.module.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.credentials = formBuilder.group({
        'email': ['', Validators.required],
        'password': ['', Validators.required]
      });
    }

  ngOnInit() {}

  onSubmit({value, valid}: {value: Object, valid: boolean}) {
    this.authService.login(value)
      .subscribe(result => {
        console.log(result);
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      });
  }

}
