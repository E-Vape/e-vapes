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

shoppingCart = [];
private changesSave: Boolean = false;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private productService: ProductsService,
  private authService: AuthService,
  private shoppingCartService: ShoppingCartService
) {}

  ngOnInit() {
  }

  saveCart(id) {
    this.shoppingCartService.userCartId(this.shoppingCart)
    .subscribe(cart => { cart._id = cart;
    console.log(cart);
   })
 }
}
