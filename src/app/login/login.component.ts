import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import Swal from 'sweetalert2';
interface IUser{
  username:string;
  password:string;
  roles:[];
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
   helper = new JwtHelperService();
  loginUserData ={
    username:"",
     password:"",
     roles:[]
  };

  constructor(private _auth:AuthentificationService,
    private _router: Router) { }

  ngOnInit() {
  
  }
  loginUser(){
   console.log(this.loginUserData)
   this._auth.loginUser(this.loginUserData) 
   .subscribe(
     res => {
       const token=res.token;
       console.log(res)
       localStorage.setItem('token',res.token)
       const decodedToken = this.helper.decodeToken(token);
       console.log(decodedToken);
       localStorage.setItem('username',decodedToken.username);
       localStorage.setItem('roles',decodedToken.roles[0]);
       localStorage.setItem('expiration',decodedToken.exp);
       console.log(localStorage);
       this._router.navigate(['admin']) 

       Swal.fire(
        'Authentification réussit'
        
       );
     }, 
     
    err => console.log(err)
   )
   }

   


}

