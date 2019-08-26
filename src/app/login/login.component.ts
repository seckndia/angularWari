import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {}

  constructor(private _auth:AuthentificationService) { }

  ngOnInit() {
    
  }
  loginUser(){
   this._auth.loginUser(this.loginUserData) 
   .subscribe(
     res => console.log(res),
    err => console.log(err)
   )
   }




}

