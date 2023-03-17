import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalBill = 0;
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.getItems();
  }
  getItems() {
    this.productsService.getCart().subscribe((res) => {
      if (res.status === 'success') {
        this.cartItems = res.data!;
        this.totalBill = this.cartItems.reduce(
          (prev, acc) => prev + acc.totalPrice,
          0
        );
      }
    });
  }
  addQuantity(orderItemId: number, oldQuantity: number) {
    this.productsService
      .updateCartItem(orderItemId, oldQuantity + 1)
      .subscribe((res) => {
        if (res.status === 'success') {
          this.getItems();
        }
      });
  }
  subQuantity(orderItemId: number, oldQuantity: number) {
    if (oldQuantity === 1) {
      this.productsService.deleteCartItem(orderItemId).subscribe((res) => {
        if (res.status === 'success') {
          this.getItems();
        }
      });
    } else {
      this.productsService
        .updateCartItem(orderItemId, oldQuantity - 1)
        .subscribe((res) => {
          if (res.status === 'success') {
            this.getItems();
          }
        });
    }
  }
}
