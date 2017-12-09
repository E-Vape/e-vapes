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
  constructor( private router: Router, private route: ActivatedRoute, private productsService: ProductsService,
  ) { }

  ngOnInit() {
  }

editProduct(id, brand, model, description, price, rating, image, category, subcategory){
  this.productsService.editProduct(id, brand, model, description, price, rating, image, category, subcategory)
  .subscribe(product => console.log(product));
}


  }
