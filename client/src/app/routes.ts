import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';

import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [
  { path: 'api/auth/signup', component: SignupComponent },
  { path: 'api/auth/login', component: LoginFormComponent },
  { path: 'products', component: ProductsListComponent},
  { path: '**', redirectTo: '' },

]
