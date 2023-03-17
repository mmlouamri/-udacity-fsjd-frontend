import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../products.service';

class OrderItem {
  quantity: number;
  constructor() {
    this.quantity = 1;
  }
}
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css'],
})
export class ProductItemsComponent {
  @Input() product: any;
  orderItem = new OrderItem();
  @Output() addToCartTrick = new EventEmitter<{
    id: number;
    quantity: number;
  }>();
  onSubmit() {
    // This was added to meet the @Output constraint,
    // obviously we could have added the productService
    // here and make the request from this component
    this.addToCartTrick.emit({
      id: this.product.id,
      quantity: +this.orderItem.quantity,
    });
  }
}
