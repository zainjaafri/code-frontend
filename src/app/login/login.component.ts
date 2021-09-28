import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  login() : void {
    if(this.email == 'admin@gmail.com' && this.password == 'admin'){
     this.router.navigate(["home-component"]);
    }else {
      alert("Invalid credentials");
    }
  }
  
}