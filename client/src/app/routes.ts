import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


export const routes: Routes = [
  { path: 'api/auth/signup', component: SignupComponent },
  { path: 'api/auth/login', component: LoginFormComponent },
  { path: 'products', component: ProductsListComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'api/auth', component: ProfileEditComponent },
  { path: 'cart', component: ShoppingCartComponent},
  { path: '**', redirectTo: '' },

]
