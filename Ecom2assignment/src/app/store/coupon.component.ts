import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Discount } from '../model/coupon.model';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {
  couponVisible: boolean = true; // A property to track the visibility of the coupon feature

  constructor(private router: Router,private discount : Discount) {} // Inject the Router

  closeCoupon() {
    this.couponVisible = false;
    this.router.navigate(['/store']);
}
 successMessageVisible = false;   
   showSuccessMessage() {    
   this.successMessageVisible = true;
  }
applyCouponAndRedirect() {
  this.discount.CheckDiscount();
  //this.router.navigate(['/store']);
}

// applyCoupon() {
//   this.discount.CheckDiscount();
// }

}