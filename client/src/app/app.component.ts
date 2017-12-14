import { Component, OnInit} from '@angular/core';
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
  user;
  searchTerm = '';
  findItems;

  constructor(public ProductsService: ProductsService, public authService: AuthService, public shoppingCartService: ShoppingCartService,) {}

  ngOnInit () {
    this.authService.logout().subscribe(user => {
      this.user = user;
    })
  }

search(){
  this.ProductsService.searchProd(this.searchTerm)
  .subscribe(arraySearch => {
    this.findItems = arraySearch.slice(0,5);
  })

  console.log(this.searchTerm);
}
removeSearch() {
    this.searchTerm = '';
}
  logout() {
    this.authService.logout().subscribe();
  }
}
