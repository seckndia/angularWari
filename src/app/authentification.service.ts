import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 private _loginUrl=" http://localhost:8000/api/login"
 
  constructor(private http: HttpClient) { }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)


  }




}
