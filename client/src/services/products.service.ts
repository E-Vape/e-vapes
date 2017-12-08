import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = 'http://localhost:3000';
const PATH = '/products';
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class ProductsService {

  private product: Object;
  private options = {withCredentials: true};

  constructor(public http: Http) {}

  getProductsList(): Observable<any> {
      return this.http.get(BASEURL)
                      .map(res => res.json());
  }
  getOne(id) {
    return this.http.get(`${BASEURL}/${id}`, this.options)
    .map(res => res.json());
  }

}
