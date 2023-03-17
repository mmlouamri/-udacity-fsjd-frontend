import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { ProfileService } from '../../profile.service';

class ShippingInformation {
  shippingFirstName: string;
  shippingLastName: string;
  shippingAddress: string;
  creditCardNumber: string;

  constructor(
    shippingFirstName: string,
    shippingLastName: string,
    shippingAddress: string,
    creditCardNumber: string
  ) {
    this.shippingFirstName = shippingFirstName;
    this.shippingLastName = shippingLastName;
    this.shippingAddress = shippingAddress;
    this.creditCardNumber = creditCardNumber;
  }
}
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  shippingInformation = new ShippingInformation('', '', '', '');
  luhnCheck: boolean = false;

  constructor(
    private profileService: ProfileService,
    private productService: ProductsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.profileService.getProfile().subscribe((res) => {
      if (res.status === 'success') {
        this.shippingInformation.shippingFirstName = res.data.profile.firstName;
        this.shippingInformation.shippingLastName = res.data.profile.lastName;
        this.shippingInformation.shippingAddress = res.data.profile.address;
      }
    });
  }

  furtherValidateCC(num: string) {
    // This is to implement the ngModelChange
    // the algorithm checks that the CC has a valid number (luhn check)
    if (num.length === 16) {
      let arr = num
        .split('')
        .reverse()
        .map((x) => parseInt(x));
      let lastDigit = arr.splice(0, 1)[0];
      let sum = arr.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
        0
      );
      sum += lastDigit;
      this.luhnCheck = sum % 10 === 0;
      console.log(this.luhnCheck);
    }
  }
  onSubmit() {
    this.productService
      .createOrder(
        this.shippingInformation.shippingFirstName,
        this.shippingInformation.shippingLastName,
        this.shippingInformation.shippingAddress,
        this.shippingInformation.creditCardNumber.slice(-4)
      )
      .subscribe((res) => {
        if (res.status === 'success') {
          this.router.navigate(['/store/success']);
        }
      });
  }
}
