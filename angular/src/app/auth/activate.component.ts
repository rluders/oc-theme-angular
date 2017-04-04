import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './activate.component.html',
  styleUrls: ['./auth.module.scss', './activate.component.scss']
})
export class ActivateComponent implements OnInit {

  user: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = formBuilder.group({
      "activation_code": ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.user.controls['activation_code'].setValue(params['code']);
      });
  }

  onSubmit({value, valid}: {value: Object, valid: boolean}) {
    this.authService.activate(value)
      .subscribe(result => {
        this.router.navigate(['/auth/login']);
      });
  }

}
