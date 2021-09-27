import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/transfer.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prodId = '';
  fromParentProdId = '';
  addNewProducts = this.formBuilder.group({
    productCategory: '',
    productName: '',
    productDesc: '',
    productUnit: '',
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private transfer: TransferService) { }

  ngOnInit(): void {
    this.transfer.idfromSource$.subscribe((data) => {
      this.prodId = data;
      console.log("Id showinf from child " + this.prodId);
    });

  }

  addProduct() {
      let obs = this.http.post('http://localhost:8080/', this.addNewProducts.value).toPromise().then(data => {
        console.log(data);
        this.router.navigate(['/products-component']);
      }, error => { alert("already present") });
      console.log(this.addNewProducts.value)
  }
}
