import { Injectable, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { log } from 'util';

import { environment } from '../environments/environment';

const DOMAIN = environment.baseurl;
// const DOMAIN = 'http://localhost:3000';
const PATH = '/cart';
const BASEURL = `${DOMAIN}${PATH}`;
@Injectable()
export class ShoppingCartService implements OnInit {

  public shoppingCart = [];
  public totalPrice =0;
  private options = {withCredentials: true};

  constructor(public http: Http) { }

  ngOnInit() {
  }

 addProductToCart(object) {
  this.totalPrice = 0;
  this.shoppingCart.push(object);
  this.shoppingCart.forEach(product => {
    this.totalPrice += product.price;
    console.log(`Precio del producto:${product.price}`);
  });
  this.totalPrice = Math.floor(this.totalPrice);
  console.log(`2)${this.totalPrice}`);

 }
 saveCart(userId) {
   const products = [];
   this.shoppingCart.forEach(product => products.push(
     {
      quantity: 1,
      product: product._id
    }
    ));
   const newCart = {
    userId: userId,
    products:products,
    totalPrice: this.totalPrice
   }
   console.log(`Guardando el carrito :${newCart.products}`)
 return this.http.post(`${BASEURL}/new`, newCart, this.options)
  // .map(res => res.json())
  .subscribe(res => console.log(res));
 }

 clearCart() {
  this.shoppingCart = [];
  this.totalPrice = 0;
}

deleteItem(id) {
  this.shoppingCart.splice(id, 1).forEach(product => this.totalPrice -= product.price);
  this.totalPrice = Math.floor(this.totalPrice);
  if(this.totalPrice<=0) this.totalPrice = 0;
}

}
