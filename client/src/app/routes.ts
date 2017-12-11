import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaycartComponent } from './paycart/paycart.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';


export const routes: Routes = [
  { path: 'api/auth/signup', component: SignupComponent },
  { path: 'api/auth/login', component: LoginFormComponent },
  { path: 'products', component: ProductsListComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'api/auth', component: ProfileEditComponent },
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'product/new', component: ProductNewComponent},
  { path: 'product/edit/:id', component: ProductEditComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'paymethod/user/cart', component: PaycartComponent},
  { path: 'suggestions', component: SuggestionsComponent},





  { path: '**', redirectTo: '' },

]
