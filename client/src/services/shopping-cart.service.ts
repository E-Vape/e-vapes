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
  private options = {withCredentials: true};

  constructor(public http: Http) { }

  ngOnInit() {}

 addProductToCart(object) {
  this.shoppingCart.push(object);
 }
 userCartId(id) {
 return this.http.post(`${BASEURL}/${id}`, this.options)
 .map(res => res.json());
 }
}
