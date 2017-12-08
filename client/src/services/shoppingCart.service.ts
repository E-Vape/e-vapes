import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}/cart`;

interface CartItem {
  product: any;
  quantity: any;
}


@Injectable()

export class ShoppingcartService {

  private orderByUser: Array<any> = [];
  private shoppingCart: Array<CartItem> = [];
  private totAmount = 0;

  constructor(private http: Http) {}

  // getByUserId(id) {
  //   return this.http.get(`${BASE_URL}/`);
  // }

  // confirmBuy(buyOrder) {
  //   this.shoppingCart = [];
  //   return this.http.post(`${BASE_URL}/new`, buyOrder)
  //     .map(res => {
  //       res.json();
  //       this.shoppingCart = [];
  //     });
  // }

  // getOrderByUser (id) {
  //   return this.http.get(`${BASE_URL}/${id}/user`)
  //     .map(res => res.json());
  // }

  // addProduct(product) {
  //   this.totAmount = 0;
  //   this.shoppingCart.push({
  //     product,
  //     quantity: 1
  //   });
  // }

  // saveShoppingCart() {
  //   this.shoppingCart.forEach(e => {
  //     this.totAmount += e.product.price * e.quantity;
  //   });
  // }

  // setAmount(price, quantity) {
  //   console.log(price, quantity);
  // }

  // getAmount () {
  //   return this.totAmount;
  // }

  // getShoppingCard() {
  //   return this.shoppingCart;
  // }

  // clear() {
  //   this.shoppingCart = [];
  // }

  // deleteItem(id) {
  //   this.shoppingCart.splice(this.shoppingCart.map(e => e.product._id).indexOf(id), 1);
  // }
}
