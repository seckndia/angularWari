import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  jwt:string
  username:string
  roles=localStorage.getItem("roles");
  
 private _loginUrl=" http://localhost:8000/api/login"
 
  constructor(private http: HttpClient,
               private _router: Router) { }

  loginUser(user){
    console.log(user);
    return this.http.post<any>(this._loginUrl,user)

  }

loggedIn(){
  return !!localStorage.getItem('token')

}

logoutUser(){
  this._router.navigate(['/'])
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
/* 
saveToken(jwt:string)
    {
      localStorage.setItem('token',jwt['token']);
      this.jwt=jwt['token'];
      this.parseJWT();
    }
    parseJWT(){
let jwtHelper = new JwtHelperService();
let objJWT = jwtHelper.decodeToken(this.jwt);
console.log(objJWT)
this.username=objJWT.username;
console.log(this.username)
this.roles=objJWT.roles;
console.log(this.roles);
    } */
    


initParams(){
this.jwt=undefined;
this.username=undefined;
this.roles=undefined;
}
isAdmin() {
    return this.roles.indexOf('ROLE_ADMIN') >= 0;
    

}
isSuperAdmin() {
    return this.roles.indexOf('ROLE_SUPERADMIN') >= 0;

}
isCaissier() {
  return this.roles.indexOf('ROLE_CAISSIER') >= 0;

}
isUser() {
    return this.roles.indexOf('ROLE_USER') >= 0;
}
isAuthenticated() {
  console.log(this.roles)
    return this.roles
}

}
