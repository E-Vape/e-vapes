import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingcartService } from '../../services/shoppingcart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  private quantity: number;
  private product: any;
  private products;
  private amount: number;
  private changesSave: Boolean = false;
  private productsId;
  private user;

  constructor(
    private productService: ProductsService,
    private routes: ActivatedRoute,
    private shoppingCartService: ShoppingcartService,
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.isLoggedIn()
    .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.getProductDetails(params['id']);
    });
  }
  getProductDetails(id) {
    this.productService.getOne(id)
      .subscribe(product => {
        this.product = product;
      });
  }

  saveChanges() {
    this.changesSave = !this.changesSave;
    this.shoppingCartService.saveShoppingCart();
  }

  clear() {
    this.shoppingCartService.clear();
  }

  getProductId() {
    this.products = this.shoppingCartService.getShoppingCard();
    this.productsId = this.products.map(e => e.product._id);
  }

  buyProducts() {
    this.getProductId();
    this.amount = this.shoppingCartService.getAmount();
    const buyOrder = {
      buyer: this.user._id,
      producer: this.product.producer._id,
      products: this.productsId,
      totalPrice: this.amount
    };
    this.shoppingCartService.confirmBuy(buyOrder)
      .subscribe(res => console.log(res));
  }
}
