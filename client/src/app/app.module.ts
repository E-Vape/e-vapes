import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from '../services/auth.service';
import { ProductsService } from '../services/products.service';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    ProductsListComponent,
    ProfileComponent,
    ProfileEditComponent,
    ShoppingCartComponent,
    ProductDetailComponent,
    ProductNewComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, ProductsService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
