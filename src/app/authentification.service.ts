import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

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


}
