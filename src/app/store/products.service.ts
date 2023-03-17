import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrl } from '../apiUrl';
import {
  GetCartRes,
  GetOrdersRes,
  GetProductRes,
  GetProductsRes,
} from '../models/res';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  userId = localStorage.getItem('userId');
  bearerToken = localStorage.getItem('token');
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<GetProductsRes>(APIUrl + `/products`);
  }
  getProduct(id: number) {
    return this.http.get<GetProductRes>(APIUrl + `/products/${id}`);
  }

  getCart() {
    return this.http.get<GetCartRes>(
      APIUrl + `/users/${this.userId}/orderitems`,
      {
        headers: {
          authorization: `Bearer ${this.bearerToken}`,
        },
      }
    );
  }
  addCartItem(productId: number, quantity: number) {
    return this.http.post<any>(
      APIUrl + `/users/${this.userId}/orderitems`,
      {
        productId,
        quantity,
      },
      {
        headers: {
          authorization: `Bearer ${this.bearerToken}`,
        },
      }
    );
  }

  updateCartItem(orderItemId: number, quantity: number) {
    return this.http.put<any>(
      APIUrl + `/users/${this.userId}/orderitems/${orderItemId}`,
      {
        quantity,
      },
      {
        headers: {
          authorization: `Bearer ${this.bearerToken}`,
        },
      }
    );
  }
  deleteCartItem(orderItemId: number) {
    return this.http.delete<any>(
      APIUrl + `/users/${this.userId}/orderitems/${orderItemId}`,
      {
        headers: {
          authorization: `Bearer ${this.bearerToken}`,
        },
      }
    );
  }

  createOrder(
    shippingFirstName: string,
    shippingLastName: string,
    shippingAddress: string,
    creditCardLastDigits: string
  ) {
    return this.http.post<any>(
      APIUrl + `/users/${this.userId}/orders/`,
      {
        shippingFirstName,
        shippingLastName,
        shippingAddress,
        creditCardLastDigits,
      },
      {
        headers: {
          authorization: `Bearer ${this.bearerToken}`,
        },
      }
    );
  }

  getOrders() {
    return this.http.get<GetOrdersRes>(
      APIUrl + `/users/${this.userId}/orders/`,
      {
        headers: {
          authorization: `Bearer ${this.bearerToken}`,
        },
      }
    );
  }
}
