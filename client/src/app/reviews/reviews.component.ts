import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {

  }

  ngOnInit() {}


  getReviews(id) {
  console.log('entrando en get reviews')
  this.productsService.getReviews(id)
  .subscribe( review => { this.reviews = review});

  }
}
