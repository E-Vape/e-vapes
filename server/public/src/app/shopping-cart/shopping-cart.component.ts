import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

public shoppingCart = [];
public changesSave: Boolean = false;
public user;
public product;
i;

constructor(
  public router: Router,
  public route: ActivatedRoute,
  public productService: ProductsService,
  public authService: AuthService,
  public shoppingCartService: ShoppingCartService
) {
  this.authService.isLoggedIn()
  .subscribe(user => this.user = user);
}

  ngOnInit() {}

 clearCart() {
  this.shoppingCartService.clearCart();
}
}
