import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  products: Array<any> = [];

  constructor(public ProductsService: ProductsService, public authService: AuthService) {
  }

  ngOnInit() {
    this.ProductsService.getProductsList().subscribe( list => {
      this.products = list;
    });
  }

}
