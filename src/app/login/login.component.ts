import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router : Router) { }

  loginView : boolean = true;
  loginForm = {"email" : "" , "password" : ""};
  signupForm = {"firstName" : "" , "lastName":"" , "email" : "" , "password" : ""};

  viewToggle(data){
    data == 'true' ? this.loginView = false :  this.loginView = true;
  }

  login(){
    //call login api from auth service here
    this._router.navigateByUrl('/dashboard');
  }

  signup(){
    // insert user in db from auth service and route to dashboard
    this._router.navigateByUrl('/dashboard');
  }

  ngOnInit() {
  }

}
