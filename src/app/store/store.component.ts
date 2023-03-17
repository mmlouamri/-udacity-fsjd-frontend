import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
