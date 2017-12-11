import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})

export class ProductNewComponent implements OnInit {
  newProduct= {brand:'', model:'', description:'', price:'', rating:'', image:'', type:{ category:'', subcategory:''}};


  constructor(private router:Router, private route:ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit() {}

  createObject(brand, model, category, subcategory, description, price, rating, image) {
    this.newProduct = {brand:brand, model:model, description:description, price:price, rating:rating, image:image,
      type: {
        category: this.newProduct.type.category,
        subcategory: this.newProduct.type.subcategory
      }
    }

    console.log(this.newProduct)
    this.productsService.createNewProduct(this.newProduct)
      .subscribe(res => {
        this.router.navigate(['/products']);
        console.log(res);
      });
  }

  saveChanges() {
    this.productsService.createNewProduct(this.newProduct)
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }
}
