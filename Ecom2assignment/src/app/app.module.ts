import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { CouponComponent } from "./store/coupon.component";
import { StoreModule } from "./store/store.module";
import { ProductDetailsComponent } from "./store/ProductDetail.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "coupon",
        component: CouponComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "store",
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      { path: "productdetails/:id", component: ProductDetailsComponent },
      {
        path: "cart",
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard],
      },
      { path: "**", redirectTo: "/coupon" },
    ]),
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
