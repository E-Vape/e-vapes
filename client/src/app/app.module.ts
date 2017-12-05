import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from '../services/auth.service';
import { LabarraComponent } from './labarra/labarra.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LabarraComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
