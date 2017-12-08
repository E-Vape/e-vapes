import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct={
    brand:'',
    model:'',
    type:{
      category:'',
      subcategory:'',
    }
  };
  constructor(private router:Router, private route:ActivatedRoute, private ProductsService: ProductsService) {
        // this.ProductsService.createNewProduct(this.newProduct).subscribe(() => {
        //   this.router.navigate(['/products']);
        // });

  }

  ngOnInit() {
  }
  createObject(brand,model,category,subcategory){
    this.newProduct = {
      brand: brand,
      model: model,
      type:{
        category: this.newProduct.type.category,
        subcategory: this.newProduct.type.subcategory
      }

    }
    console.log(this.newProduct)

  }
}
