import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/transfer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-products',
  templateUrl: './modify-products.component.html',
  styleUrls: ['./modify-products.component.css']
})
export class ModifyProductsComponent implements OnInit {

  prodId = '';
  fromParentProdId = '';
  updateProducts = this.formBuilder.group({
    productCategory: new FormControl(''),
    productName: new FormControl(''),
    productDesc: new FormControl(''),
    productUnit: new FormControl(''),
  });
  response: any;
  errorMessage!: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private transfer: TransferService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("FROM ACTIVATED ROUTE: " + this.activatedRoute.snapshot.params.id);
    let obs = this.http.get('http://localhost:8080/prodId/' + this.activatedRoute.snapshot.params.id);
    obs.subscribe((response) => {
      this.response = response
      console.log(this.response[0].productCategory);
      this.updateProducts = new FormGroup({
        productCategory: new FormControl(this.response[0].productCategory),
        productName: new FormControl(this.response[0].productName),
        productDesc: new FormControl(this.response[0].productDesc),
        productUnit: new FormControl(this.response[0].productUnit),
      });
    })
  }

  updateProduct() {
    if (confirm("Are you sure you want to update??")) {
      let obs = this.http.put('http://localhost:8080/' + this.activatedRoute.snapshot.params.id, this.updateProducts.value).toPromise().then(data => {
          alert("data updated successfully")
          this.router.navigate(['/products-component']);
      }, (error: HttpErrorResponse) => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      });
    }
  }

}
