import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  user;
  public recentProduct = {};
  public shoppingCart = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private productsService: ProductsService,
    public shoppingCartService: ShoppingCartService
  ) {
    this.authService.isLoggedIn()
    .subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProductDetails(params['id'])
    });
  }

  getProductDetails(id) {
    this.productsService.getOne(id)
      .subscribe(product => this.product = product);
      }


  addProduct(object) {
    this.shoppingCartService.addProductToCart(object);
  }


  deleteProduct(id) {
  this.productsService.deleteProduct(this.product._id)
    .subscribe(() => {
      this.router.navigate(['/products']);
    });
}

}
