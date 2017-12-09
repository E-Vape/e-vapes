import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

private shoppingCart = [];
private changesSave: Boolean = false;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private productService: ProductsService,
  private authService: AuthService,
  private shoppingCartService: ShoppingCartService
) {}

  ngOnInit() {
    // console.log(this.shoppingCartService.shoppingCart);
  }

  createCart() {
    // this.shoppingCartService.addProductToCart(this.shoppingCart)
    // .subscribe(res => {
    //   console.log(res);
    // });
  }

  saveCart() {
    // this.shoppingCartService.addProductToCart(this.shoppingCart)
    // .subscribe(() => {
    //   this.router.navigate(['/profile']);
    // })
  }
  saveChanges() {
    this.changesSave = !this.changesSave;
    this.shoppingCartService.saveShoppingCart();
  }
}
// export class ShoppingCartComponent implements OnInit {

//     public quantity: Number;
//     public product: any;
//     public products;
//     public amount: Number;
//     public changesSave: Boolean = false;
//     public productsId;
//     public user;

//     constructor(
//       public productService: ProductsService,
//       public routes: ActivatedRoute,
//       public shoppingCartService: ShoppingCartService,
//       public router: Router,
//       public auth: AuthService
//     ) {
//       this.auth.isLoggedIn()
//         .subscribe(user => this.user = user);
//     }

//     ngOnInit() {
//       this.routes.params.subscribe(params => {
//         this.getProductDetails(params['id']);
//       });
//     }

//     getProductDetails(id) {
//       this.productService.getOne(id)
//         .subscribe(product => {
//           this.product = product;
//         });
//     }

    // saveChanges() {
    //   this.changesSave = !this.changesSave;
    //   this.shoppingCartService.saveShoppingCart();
    // }

//     clear() {
//       this.shoppingCartService.clear();
//     }

//     getProductId() {
//       this.products = this.shoppingCartService.getShoppingCard();
//       this.productsId = this.products.map(e => e.product._id);
//     }

//     buyProducts() {
//       this.getProductId();
//       this.amount = this.shoppingCartService.getAmount();
//       const buyOrder = {
//         buyer: this.user._id,
//         producer: this.product.producer._id,
//         products: this.productsId,
//         totalPrice: this.amount
//       };
//       this.shoppingCartService.confirmBuy(buyOrder)
//         .subscribe(res => console.log(res));
//     }

//   }
