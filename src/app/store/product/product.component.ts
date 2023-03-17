import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../products.service';

class Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  constructor(
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}

class OrderItem {
  quantity: number;
  constructor() {
    this.quantity = 1;
  }
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product = new Product(1, '', 0, '', '');
  orderItem = new OrderItem();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productId');
      if (!productId) {
        this.router.navigate(['/store']);
      } else {
        this.productsService.getProduct(+productId).subscribe((res) => {
          if (res.status === 'success') {
            this.product.id = res.data!.id;
            this.product.name = res.data!.name;
            this.product.imageUrl = res.data!.imageUrl;
            this.product.price = res.data!.price;
            this.product.description = res.data!.description;
          }
        });
      }
    });
  }
  onSubmit() {
    this.productsService
      .addCartItem(this.product.id, +this.orderItem.quantity)
      .subscribe((res) => {
        if (res.status === 'success') {
          alert('The product was added to the cart!');
        }
      });
  }
}
