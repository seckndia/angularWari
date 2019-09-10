import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
 private _loginUrl=" http://localhost:8000/api/login"
 
  constructor(private http: HttpClient,
               private _router: Router) { }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)

  }

loggedIn(){
  return !!localStorage.getItem('token')

}

logoutUser(){
  return localStorage.removeItem('token')
  
  this._router.navigate(['/admin'])
}
getToken(){
  return localStorage.getItem('token')
}
// parseJWT(){
//   let jwtHelper = new JwtHelperService()
//   let objJWT=jwtHelper.decodeToken(this.jwt);
//   tthis.username=objJWT.obj;
// }
// isSuperAdmin(){
//   return this.roles.indexOf('ROLE_SUPERADMIN')>=0; 
// }

// isAdmin(){
//   return this.roles.indexOf('ROLE_ADMIN')>=0; 
// }

// isUser(){
//   return this.roles.indexOf('ROLE_USER')>=0; 
// }

// isCaissier(){
//   return this.roles.indexOf('ROLE_CAISSIER')>=0; 
// }
}
