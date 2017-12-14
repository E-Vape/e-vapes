import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

const DOMAIN = environment.baseurl;

// const DOMAIN = 'http://localhost:3000';
const PATH = '/products';
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class ProductsService {

  public product: Object;
  public review: Object;
  public options = {withCredentials: true};

  constructor(public http: Http) {}

  getProductsList(): Observable<any> {
      return this.http.get(BASEURL)
      .map(res => res.json());
  }
  getOne(id) {
    return this.http.get(`${DOMAIN}/product/${id}`, this.options)
    .map(res => res.json());
  }


  getProduct(id): Observable<any> {
  return this.http.get(`${DOMAIN}/product/${id}`, this.options)
    .map(res => res.json());
}

  createNewProduct(product) {
   return this.http.post(`${DOMAIN}/product/new`, product)
     .map(res => res.json());
 }

  editProduct(id, product) {
   return this.http.put(`${DOMAIN}/product/edit/${id}`, product, this.options)
     .map(res => res.json());
 }

 getReviews(id): Observable<any> {
   return this.http.get(`${DOMAIN}/products/${id}`, this.options)
     .map(res => res.json());
 }

 createReviews(review, id) {
   return this.http.post(`${DOMAIN}/products/${id}`, review, this.options)
     .map(res => res.json());
 }

  deleteProduct(id) {
    return this.http.delete(`${DOMAIN}/product/${id}/delete`, this.options)
      .map(res => res.json());
  }

searchProd(term){
  return this.http.get(`${DOMAIN}/products/search?term=${term}`, this.options)
  .map(res => res.json());
}

}
