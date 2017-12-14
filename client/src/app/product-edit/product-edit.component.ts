import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
product;
editProduct = {
    brand: '',
    model: '',
    description: '',
    price: '',
    rating: '',
    image: '',
    type:{
      category:'',
      subcategory:'',
    }
  };
  constructor( public router: Router, public routes: ActivatedRoute, public productService: ProductsService,
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.getProductDetails(params['id']);
    });
  }

    getProductDetails(id) {
      this.productService.getOne(id)
        .subscribe(product => {
          this.product = product._id;
          this.editProduct = {
            brand: product.brand,
            model: product.model,
            description: product.description,
            price: product.price,
            rating: product.rating,
            image: product.image,
            type: {
            category: product.type.category,
            subcategory: product.type.subcategory,
          }
          };
        });
    }

    saveChanges() {
    this.productService.editProduct(this.product, this.editProduct)
      .subscribe(() => {
        this.router.navigate(['/products', this.editProduct]);
          });
      }
  }
