// import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../../services/products.service';
// import { ActivatedRoute, Router } from '@angular/router';
//
//
//
// @Component({
//   selector: 'app-product-detail',
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
//
//
// export class ProductsDetailComponent implements OnInit {
//   products: Array<any> = [];
//
//   constructor(public ProductsService: ProductsService) {
//     this.ProductsService.getProducts().subscribe( list => {
//       this.products = list;
//       console.log(this.products)
//     });
//   }
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public recentProduct = {};
  public shoppingCart = [];

  products: object;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ProductsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(`El parametro recibido es: ${params['id']}`);
      this.ProductsService.getProduct(params['id']).subscribe(
        (product => this.products = product),
        (error => console.log(error))
      );
      console.log(this.products);

    });
  }

  getPhoneDetails(id) {
    this.ProductsService.getProduct(id)
      .subscribe((products) => {
        this.products = products;
      });
  }

  addProduct() {
    this.recentProduct = this.products;
    this.shoppingCart.push(this.products)
  }
  // deletePhone() {
  //   if (window.confirm('Are you sure?')) {
  //     this.phoneService.remove(this.phone._id)
  //       .subscribe(() => {
  //         this.router.navigate(['']);
  //       });
  //   }
  // }

}
