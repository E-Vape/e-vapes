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
  review;
  public recentProduct = {};
  public shoppingCart = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private productsService: ProductsService,
    public shoppingCartService: ShoppingCartService,

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

// getReviews(id) {
// console.log('entrando en get reviews')
// this.productsService.getReviews(id).subscribe( review => {
//   this.review = review;
// });
//
//   // .subscribe(review => this.review = review)
//
//
// }

  deleteProduct(id) {
  this.productsService.deleteProduct(this.product._id)
    .subscribe(() => {
      this.router.navigate(['/products']);
    });
}

}
