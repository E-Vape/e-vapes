import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  products: Array<any> = [];
  search;

  constructor(public ProductsService: ProductsService, public authService: AuthService, public shoppingCartService: ShoppingCartService,) {
  }

  ngOnInit() {
    this.ProductsService.getProductsList().subscribe( list => {
      this.products = list;
    });
  }
  addProduct(object) {
    this.shoppingCartService.addProductToCart(object);
  }
}
