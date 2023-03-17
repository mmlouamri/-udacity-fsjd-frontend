import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
class RegisterModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerModel = new RegisterModel();
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService
      .register(this.registerModel.email, this.registerModel.password)
      .subscribe((res) => {
        if (res.status === 'success') {
          this.router.navigate(['/auth/login']);
        }
      });
  }
}
