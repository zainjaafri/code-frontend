import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  obs: any;
  obss: any;
  response: any;
  responses: any;
  data: any;
  searchtext: string = "";
  emptyProducts!: string;
  errorMessage!: any;
  @Input() update: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    let obs = this.http.get('http://localhost:8080/');
    obs.subscribe((response) => {
      console.log(response);
      this.response = response;
      if(this.response.length===0){
        this.emptyProducts="No products found, Please add products to database"
      }
      else{ this.emptyProducts=""}
    })

    this.http.get('http://localhost:8080/')
    .subscribe(data => this.data = data);
  }
  refresh(){
    this.errorMessage = null;
    this.responses =null;
    this.searchtext ="";
    let obs = this.http.get('http://localhost:8080/');
    obs.subscribe((response) => {
      console.log(response);
      this.response = response;
    })
  }

  search(){
    this.errorMessage = null;
    this.response =null;
    let obss = this.http.get('http://localhost:8080/'+this.searchtext);
    obss.subscribe(
      responses => {
        this.responses = responses;
        console.log(this.responses);
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      });
  }

  deleteRecord(prodId: string){
    let obs = this.http.delete('http://localhost:8080/'+prodId).toPromise().then(data => {
      console.log(data);
      this.ngOnInit();
    },error => {alert("not found")});
  }

  updateRecord(prodId: string){
    this.router.navigate(['/app-modify-products/'+prodId]);
  }

}
