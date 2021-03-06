import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgModule, Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  loggedIn: boolean= false;

  loginResponse: any;

  loginCredentials = this.formBuilder.group({
    loginEmail: new FormControl(''),
    loginPassword: new FormControl(''),
  });
  @Output() showAllProductsClicked = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { 
    router.navigate(['login-component']);
  }

  ngOnInit() {
    this.update = false;
  }

  showAllProducts(x: boolean) {
    this.showAllProductsClicked.emit(x);
  }

  allProducts() {
    this.update = true;
  }

  change() {
    this.signedIn = true;
  }
  revert() {
    this.signedIn = false;
  }
  login(): void {
    // if (this.email == 'admin@gmail.com' && this.password == 'admin') {
    //   this.router.navigate(["home-component"]);
    //   this.change();
    // } else {
    //   alert("Invalid credentials");
    // }

    console.log("inside login method")

    // let obs = this.http.get('http://localhost:8080/login', this.loginCredentials.value);
    // obs.subscribe((loginResponse) => {
    //   this.loginResponse = loginResponse
    //   console.log(this.loginResponse);
    // })

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
  logout(): void {
    this.router.navigate(["/login-component"]);
    this.revert();
    this.email = "";
    this.password = "";
    this.loggedIn=false;
  }
}
