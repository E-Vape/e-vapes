import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartService } from './shopping-cart.service';

import { environment } from '../environments/environment';

const BASE_DOMAIN = environment.baseurl;
// const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}/api/auth`;

@Injectable()
export class AuthService {
  options: Object = {
    withCredentials: true
  };

  user ={
    email:'',
    password: '',
    role:'',
    username:'',
    _id:''
  };
  loginEvent: EventEmitter<Object> = new EventEmitter();

  constructor(private http: Http, private shoppingCartService: ShoppingCartService) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    const error_message = e.json().message;
    console.error(error_message);
    return Observable.throw(e.json().message);
  }

  handleUser(obj) {
    this.user = obj;
    this.loginEvent.emit(this.user);
    return this.user;
  }

  signup(username: String, password: String, email: String) {
    return this.http.post(`${BASE_URL}/signup`, {username, password, email}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  login(username: String, password: String) {
    console.log(`Login with user:${username} and password ${password}`);
    return this.http.post(`${BASE_URL}/login`, {username, password}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  editUserByID(id, username, password, email) {
       return this.http.put(`${BASE_URL}/${id}`, {username, password, email})
                       .map(res => res.json());
   }

  logout() {
    return this.http.get(`${BASE_URL}/logout`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(null))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASE_URL}/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }
  sendMail() {
    return this.http.post(`${BASE_DOMAIN}/email/sendEmail`, this.user, this.options)
    .map(res => res.json())
  }
}
