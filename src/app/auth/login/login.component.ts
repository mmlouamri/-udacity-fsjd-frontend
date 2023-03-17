import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginModel = new LoginModel();

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.loginModel.email = 'john@user.com';
    this.loginModel.password = '123456';
  }
  onSubmit() {
    this.authService
      .login(this.loginModel.email, this.loginModel.password)
      .subscribe((res) => {
        if (res.status === 'success') {
          localStorage.setItem('token', res.data!.token);
          localStorage.setItem('userId', `${res.data!.user.id}`);
          this.router.navigate(['/store']);
        }
      });
  }
}
