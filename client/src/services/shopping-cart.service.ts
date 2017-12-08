import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ShoppingCartService implements OnInit {
shoppingCart = [];
  constructor() { }

  ngOnInit() {}

 addProductToCart(object) {
  this.shoppingCart.push(object);
 }

}
