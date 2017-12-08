import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingcartService } from '../../services/shoppingcart.service';
import { ProductsListComponent } from '../products-list/products-list.component';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  // public recentProduct = 'none';
  // public cart = [];


  constructor(public AuthService: AuthService, public ProductsService: ProductsService) {}

  ngOnInit() {
   }
  //  selectedProduct() {
  //   this.recentProduct = product;
  //   this.cart.push(product)
  //  }
  }
