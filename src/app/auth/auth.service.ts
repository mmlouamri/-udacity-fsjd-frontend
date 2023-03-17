import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrl } from '../apiUrl';
import { LoginRes, RegisterRes } from '../models/res';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }
  login(email: string, password: string) {
    return this.http.post<LoginRes>(APIUrl + `/users/login`, {
      email,
      password,
    });
  }

  register(email: string, password: string) {
    return this.http.post<RegisterRes>(APIUrl + `/users/register`, {
      email,
      password,
    });
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}
