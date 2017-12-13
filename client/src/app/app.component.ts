import { Component } from '@angular/core';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-vapes';
  constructor(public ProductsService: ProductsService, public authService: AuthService, public shoppingCartService: ShoppingCartService,) {}

  logout() {
    this.authService.logout().subscribe();
  }
}
