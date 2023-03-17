import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      if (res.status === 'success') {
        this.productsList = res.data!;
      }
    });
  }
  addToCartTrick(cartItem: { id: number; quantity: number }) {
    this.productsService
      .addCartItem(cartItem.id, cartItem.quantity)
      .subscribe((res) => {
        if (res.status === 'success') {
          alert('The product was added to the cart!');
        }
      });
  }
}
