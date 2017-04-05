import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./auth.module.scss', './register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.user = formBuilder.group({
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'password_confirmation': ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit({value, valid}: {value: Object, valid: boolean}) {
    this.authService.register(value)
      .subscribe(result => {
        this.router.navigate(['/auth/login']);
      });
  }

}
