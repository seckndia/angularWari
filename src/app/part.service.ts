import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partenaire } from './models/partenaire';


@Injectable({
  providedIn: 'root'
})

export class PartService {

  
  constructor(private http: HttpClient) { }
private urlList:string=" http://localhost:8000/api/listpart";
private urlListUers:string= " http://localhost:8000/api/listuser";
private urlListUer:string= " http://localhost:8000/api/listuserpart";
private urlComptAll:string= " http://localhost:8000/api/comptAll";
private urlComptPart:string= " http://localhost:8000/api/listcompt";
private urlInfocompt:string= "  http://127.0.0.1:8000/api/findcompt";


  getPartenaires() {
return this.http.get<any>(this.urlList);
  }
  getUsers() {
    return this.http.get<any>(this.urlListUers);
      }
      getUserparts() {
        return this.http.get<any>(this.urlListUer);
          }
          getComptAll() {
            return this.http.get<any>(this.urlComptAll);
              }
              getCompts() {
                return this.http.get<any>(this.urlComptPart);
                  }

                
}
