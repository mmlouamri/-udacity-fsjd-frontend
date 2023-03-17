import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './store/profile/profile.component';
import { CartComponent } from './store/cart/cart.component';
import { ProductsComponent } from './store/products/products.component';
import { ProductItemsComponent } from './store/products/product-items/product-items.component';
import { OrderFormComponent } from './store/cart/order-form/order-form.component';
import { StoreComponent } from './store/store.component';
import { HistoryComponent } from './store/history/history.component';
import { OrderItemComponent } from './store/history/order-item/order-item.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductComponent } from './store/product/product.component';
import { AuthComponent } from './auth/auth/auth.component';
import { SuccessComponent } from './store/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CartComponent,
    ProductsComponent,
    ProductItemsComponent,
    OrderFormComponent,
    StoreComponent,
    OrderItemComponent,
    HistoryComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    AuthComponent,
    SuccessComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
