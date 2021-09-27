import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './home/products/products.component';
import { TransferService } from './transfer.service';
import { AddProductComponent } from './home/add-product/add-product.component';
import { ModifyProductsComponent } from './home/modify-products/modify-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    AddProductComponent,
    ModifyProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
  ],
  providers: [
    TransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
