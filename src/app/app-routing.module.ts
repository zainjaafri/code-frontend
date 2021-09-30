import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './home/products/products.component';
import { AddProductComponent } from './home/add-product/add-product.component';
import { ModifyProductsComponent } from './home/modify-products/modify-products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'products-component', component: ProductsComponent },
  { path: 'app-add-product', component: AddProductComponent },
  { path: 'app-component', component: AppComponent },
  { path: 'app-modify-products/:id', component: ModifyProductsComponent },
  { path: 'signup-component', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
