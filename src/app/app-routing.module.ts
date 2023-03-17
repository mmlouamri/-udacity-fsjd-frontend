import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './store/cart/cart.component';
import { HistoryComponent } from './store/history/history.component';
import { ProductComponent } from './store/product/product.component';
import { ProductsComponent } from './store/products/products.component';
import { ProfileComponent } from './store/profile/profile.component';
import { StoreComponent } from './store/store.component';
import { SuccessComponent } from './store/success/success.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'store',
    component: StoreComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'cart', component: CartComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'success', component: SuccessComponent },
      { path: 'p/:productId', component: ProductComponent },
      { path: '**', component: ProductsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
