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

private shoppingCart = [];
private changesSave: Boolean = false;
private user;
private product;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private productService: ProductsService,
  public authService: AuthService,
  public shoppingCartService: ShoppingCartService
) {
  this.authService.isLoggedIn()
  .subscribe(user => this.user = user);
}

  ngOnInit() {

  }


 clearCart() {
  this.shoppingCartService.clearCart();
}
}
