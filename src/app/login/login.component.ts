import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  response: any;
  loggedIn: boolean= false;

  signedIn = false;
  loginResponse: any;

  loginCredentials = this.formBuilder.group({
    loginEmail: new FormControl(''),
    loginPassword: new FormControl(''),
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }
  
  login() : void {
    console.log("inside login method")

    let obs = this.http.post('http://localhost:8080/login',this.loginCredentials.value).toPromise().then(loginResponse => {
      this.loginResponse = loginResponse
      console.log(this.loginResponse);
      if(this.loginResponse==true){
        this.loggedIn=true;
        this.router.navigate(["/home-component"]);
      }
      else{
        this.loggedIn=false;
        alert("Incorrect Username or Password Entered")
      }
      
    });
  }
  
}