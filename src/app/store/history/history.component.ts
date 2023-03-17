import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  orders: any[] = [];
  success: boolean = false;
  constructor(
    private productsService: ProductsService,
    private router: ActivatedRoute
  ) {}
  ngOnInit() {
    this.productsService.getOrders().subscribe((res) => {
      if (res.status === 'success') {
        this.orders = res.data!.reverse();
      }
    });
  }
}
