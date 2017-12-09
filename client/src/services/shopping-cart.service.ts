import { Injectable, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

const DOMAIN = 'http://localhost:3000';
const PATH = '/cart';
const BASEURL = `${DOMAIN}${PATH}`;
@Injectable()
export class ShoppingCartService implements OnInit {

  private shoppingCart = [];
  private totAmount = 0;

  constructor(public http: Http) { }

  ngOnInit() {}

 addProductToCart(object) {
  this.shoppingCart.push(object);
 }

 saveShoppingCart() {
  this.shoppingCart.forEach(e => {
    this.totAmount += e.product.price;
  });
}

}
// interface CartItem {
//   product: any;
//   quantity: any;
// }


// @Injectable()
// export class ShoppingCartService {

//   public orderByUser: Array<any> = [];
//   public shoppingCart: Array<CartItem> = [];
//   public totAmount = 0;

//   constructor(
//     public http: Http,
//   ) { }

//   getByUserId(id) {
//     return this.http.get(`${BASEURL}/`);
//   }

//   confirmBuy(buyOrder) {
//     this.shoppingCart = [];
//     return this.http.post(`${BASEURL}/new`, buyOrder)
//       .map(res => {
//         res.json();
//         this.shoppingCart = [];
//       });
//   }

//   getOrderByUser (id) {
//     return this.http.get(`${BASEURL}/${id}/user`)
//       .map(res => res.json());
//   }

//   addProductToCart(object) {
//     this.shoppingCart.push(object);
//     }

//   addProduct(product) {
//     this.totAmount = 0;
//     this.shoppingCart.push({
//       product,
//       quantity: 1
//     });
//   }

//   saveShoppingCart() {
//     this.shoppingCart.forEach(e => {
//       this.totAmount += e.product.price * e.quantity;
//     });
//   }

//   setAmount(price, quantity) {
//     console.log(price, quantity);
//   }

//   getAmount () {
//     return this.totAmount;
//   }

//   getShoppingCard() {
//     return this.shoppingCart;
//   }

//   clear() {
//     this.shoppingCart = [];
//   }

//   deleteItem(id) {
//     this.shoppingCart.splice(this.shoppingCart.map(e => e.product._id).indexOf(id), 1);
//   }
// }
