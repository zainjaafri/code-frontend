import { HttpClient } from '@angular/common/http';
import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedIn = false;
  email!: string;
  password!: string;
  searchtext: string = "";
  response: any;
  update: any;
  @Output() showAllProductsClicked = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) {  }

  ngOnInit(){
    this.update=false;
  }

  showAllProducts(x:boolean){
    this.showAllProductsClicked.emit(x);
  }

  allProducts(){
    this.update=true;
  }

  change() {
    this.signedIn = true;
  }
  revert() {
    this.signedIn = false;
  }
  login(): void {
    if (this.email == 'admin@gmail.com' && this.password == 'admin') {
      this.router.navigate(["home-component"]);
      this.change();
    } else {
      alert("Invalid credentials");
    }
  }
  logout(): void {
      this.router.navigate([""]);
      this.revert();
      this.email="";
      this.password="";
  }
}
