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
import { PaycartComponent } from './paycart/paycart.component';
import { FilterPipe } from './products-list/pipes/filter.pipe';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AddressComponent } from './address/address.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from '../services/chat.service';
import { HomeComponent } from './home/home.component';

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
    ProductEditComponent,
    PaycartComponent,
    FilterPipe,
    SuggestionsComponent,
    AddressComponent,
    ChatComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcrn9FTK0uiQlttKlDCZ14IThSMc1007E'
    })
  ],
  providers: [AuthService, ProductsService, ShoppingCartService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
