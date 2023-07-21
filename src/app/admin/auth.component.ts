import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router, private auth: AuthService) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth
        .authenticate(this.username ?? '', this.password ?? '')
        .subscribe((responese) => {
          if (responese) {
            this.router.navigateByUrl('/admin/main');
          }
          this.errorMessage = 'Authenticcation Failed';
        });
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}