import { Injectable, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { log } from 'util';

const DOMAIN = 'http://localhost:3000';
const PATH = '/cart';
const BASEURL = `${DOMAIN}${PATH}`;
@Injectable()
export class ShoppingCartService implements OnInit {

  public shoppingCart = [];
  public totalPrice = 0;
  private options = {withCredentials: true};

  constructor(public http: Http) { }

  ngOnInit() {
  }

 addProductToCart(object) {
  this.totalPrice = 0;
  this.shoppingCart.push(object);
  this.shoppingCart.forEach(product => this.totalPrice += product.price);
 }
 saveCart(userId) {
   const products = [];
   this.shoppingCart.forEach(product => products.push(
     { // anades un nuevo producto. Antes de guardar el producto, hacer un indexOf en la cesta de la compra
      quantity: 1, // [producto1, producto2, producto3]
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
  this.shoppingCart.splice(this.shoppingCart.map(e => e.product._id).indexOf(id), 1);
}

}
