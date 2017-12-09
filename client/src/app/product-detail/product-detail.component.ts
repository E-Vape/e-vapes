import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public recentProduct = {};
  public shoppingCart = [];

  products: Object;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    public shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido es: ${params['id']}`);
      this.productsService.getProduct(params['id']).subscribe(
        (product => this.products = product),
        (error => console.log(error))
      );
      console.log(this.products);

    });
  }

  getProductDetails(id) {
    this.productsService.getProduct(id)
      .subscribe((products) => {
        this.products = products;
      });
  }

  addProduct(object) {
    this.shoppingCartService.addProductToCart(object);
  }


}
