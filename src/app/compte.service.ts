import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient) { }
  compteFile(
   
    partenaire:string
    )
    {
    const endpoint = ' http://127.0.0.1:8000/api/ajoutcompt';
    const formData: FormData = new FormData()
    formData.append('partenaire', partenaire)
   
    console.log(formData)
    return this.http.post(endpoint,formData)

  }
}
